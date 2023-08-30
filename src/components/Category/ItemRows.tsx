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
      text: "VBL",
      url: "https://binusianorg-my.sharepoint.com/:x:/r/personal/slc_binus_edu/_layouts/15/guestaccess.aspx?guestaccesstoken=YVEdXQQN2vQ7FI35XlVlOY19F2DEJE9gBa%2Bb%2FKUYBIk%3D&docid=2_088c51025a7a5475e9f1e760fd11b1be9&rev=1&e=PIvcVX",
    },
    {
      text: "Schedule Excel",
      url: "https://binusianorg.sharepoint.com/:x:/r/sites/ResourceManagementLCAS2/_layouts/15/Doc.aspx?sourcedoc=%7B7B15B929-C39C-46B7-B0E7-8F669E5E02D1%7D&file=Teaching%20Schedule%20Odd%202023-2024%20(ALS).xlsx&action=default&mobileredirect=true",
    },
  ];

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-full rounded-xl">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-t-[1px] border-[#f1f1f150] py-6 justify-between items-center flex"
        >
          <TextButton
            variant="list"
            size="default"
            className="hover:transform hover:translate-x-5 duration-200 transition-all ease-in-out delayed"
            onClick={() => handleRedirect(item.url)}
          >
            {item.text}
          </TextButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default ItemRows;
