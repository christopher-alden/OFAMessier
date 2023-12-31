"use client"
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { Fragment, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const noSchedule:any = "setIsHoliday(true)"

const schedules = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dayOfWeek: 4,
    startTime: '13:00',
    endTime: '14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dayOfWeek: 0,
    startTime: '12:00',
    endTime: '23:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dayOfWeek: 1,
    startTime: '13:00',
    endTime: '14:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dayOfWeek: 5,
    startTime: '13:00',
    endTime: '14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dayOfWeek: 2,
    startTime: '13:00',
    endTime: '14:30',
  },
]

export default function Calendar() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDaySchedule = getSchedulesForDay(selectedDay);

  return (
    <div className=''>
      <div className="max-w-md mx-auto md:max-w-4xl suisse">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-[#f1f1f150]">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto text-xl suisse-bold text-[#f1f1f1]">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-[#f1f1f1] hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-[#f1f1f1] hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-md leading-6 text-center text-[#f1f1f1] suisse-light">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-md suisse-light">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={twMerge(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={twMerge(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-[#f1f1f1]',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-[#dec0f1]',
                      !isEqual(day, selectedDay) && 'hover:bg-[#a663cc] transition-all ease-in duration-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'suisse',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {getSchedulesForDay(day).length > 0 && (
                      <div className="w-1 h-1 rounded-full bg-[#dec0f1]"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14 w-80">
            <h2 className="font-semibold text-xl text-[#f1f1f1]">
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
            </h2>
            <ol className="mt-8 space-y-1 text-md leading-6 text-[#f1f1f170]">
              {selectedDaySchedule.length > 0 ? (
                selectedDaySchedule.map((schedule) => (
                  <Schedule schedule={schedule} key={schedule.id} />
                ))
              ) : (
                <p dangerouslySetInnerHTML={{__html:noSchedule}} className='whitespace-pre-wrap'></p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}

function getSchedulesForDay(day: Date) {
  const dayOfWeek = getDay(day);
  return schedules.filter(schedule => schedule.dayOfWeek === dayOfWeek);
}


function Schedule({ schedule }:any) {
  let startDateTime = parse(schedule.startTime, "HH:mm", new Date())
  let endDateTime = parse(schedule.endTime, "HH:mm", new Date())

  
  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 hover:text-black">
      <div className="flex-auto">
        <p className="text-[#f1f1f1] group-hover:text-black">{schedule.name}</p>
        <p className="mt-0.5">
          <time dateTime={schedule.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={schedule.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={twMerge(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={twMerge(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
