"use client";
import TextButton from "../Buttons/TextButton";

// Define an interface for individual items
interface Item {
  text: string;
  url: string;
}

const ItemRows = () => {
  const items: Item[] = [
    { text: "Messier", url: "https://socs1.binus.ac.id/messier/" },
    { text: "Academics", url: "https://academic-slc.apps.binus.ac.id" },
    { text: "New Binusmaya", url: "https://newbinusmaya.binus.ac.id/login" },
    {
      text: "Shared Notes",
      url: "https://binusianorg-my.sharepoint.com/personal/christopher_silitonga_binus_ac_id/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fchristopher%5Fsilitonga%5Fbinus%5Fac%5Fid%2FDocuments%2F23%2D2&ga=1",
    },
    {
      text: "VBL Notion",
      url: "https://academic600.notion.site/59ab21b2e92b4ef3b0160b4708585ed8?v=5aa32a0857a94941a77386b5df2917a8&pvs=4",
    },
    {
      text: "Shared",
      url: "https://binusianorg.sharepoint.com/sites/ResourceManagementLCAS2/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FResourceManagementLCAS2%2FShared%20Documents%2FGeneral%2FShared%2F2022%2D2023%2F20%20Even%20Semester%2FFor%20ALL&p=true&ga=1",
    },
  ];

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
    
  };

  const handleQuickStart = () => {
    window.open("https://socs1.binus.ac.id/messier/", "_blank");
    window.open("https://academic-slc.apps.binus.ac.id", "_blank");
    window.open("https://newbinusmaya.binus.ac.id/login", "_blank");
  };

  return (
    <div className="w-full h-full rounded-xl">
      <TextButton
            variant="list"
            size="default"
            className="hover:transform hover:pl-10 duration-200 transition-all ease-in-out delayed w-full flex justify-between items-center py-8"
            onClick={() => handleQuickStart()}
          >
            <p>Quick Start</p>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
      </TextButton>
      {items.map((item, index) => (
        <div
          key={index}
          className="border-t-[1px] border-[#f1f1f150] justify-between items-center flex"
        >
          <TextButton
            variant="list"
            size="default"
            className="hover:transform hover:pl-10 duration-200 transition-all ease-in-out delayed w-full h-full flex justify-between items-center py-8"
            onClick={() => handleRedirect(item.url)}
          >
            {item.text}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          </TextButton>
          
        </div>
      ))}
    </div>
  );
};

export default ItemRows;
