import PortalModal from "@layouts/helpers/PortalModal";
import { markdownify } from "@lib/utils/textConverter";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import ImageFallback from "./ImageFallback";

const PanelSessionCard = ({ panel }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  useOnClickOutside(ref, handleCloseModal);

  return (
    <>
      <article className="flex flex-col lg:flex-row lg:items-center">
        {/* LEFT SIDE */}
        <div className="w-full h-full lg:w-1/2">
          <ImageFallback
            width={700}
            height={650}
            src={panel.image}
            alt={panel.title}
            className="size-full object-cover rounded-2xl"
          />
        </div>
        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 py-6 lg:px-6">
          <h6 className="font-medium text-[1rem] mb-2">{panel.head}</h6>
          {markdownify(panel.title, "h3", "text-h4_sm text-dark-primary font-medium mb-6")}
          <div>
            {markdownify(
              panel.description,
              "div",
              "text-dark-quaternary text-[1rem] [&>blockquote]:font-bold [&>blockquote]:border-l-[4px] [&>blockquote]:border-dark-quaternary [&>blockquote]:pl-4"
            )}
          </div>
          <button
            className="mt-6 flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-primary max-w-max text-dark-primary hover:text-white transition-colors duration-300 hover:bg-dark-primary"
            aria-label={panel.button.label}
            onClick={handleOpenModal}
          >
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_671_2977)">
                <path
                  d="M15.4531 10.1016C15.1516 10.1016 14.9062 10.3469 14.9062 10.6484V14.2875C14.9062 14.9047 14.4047 15.4062 13.7875 15.4062H2.2125C2.10781 15.4062 2.00625 15.3906 1.90937 15.3641L7.59375 9.67969V12.5781C7.59375 12.8797 7.83906 13.125 8.14062 13.125C8.44219 13.125 8.6875 12.8797 8.6875 12.5781V8.35938V8.33281C8.6875 8.32812 8.6875 8.325 8.68594 8.32031C8.68594 8.31563 8.68594 8.31094 8.68437 8.30625C8.68437 8.30156 8.68281 8.29531 8.68281 8.29063C8.68281 8.2875 8.68125 8.28437 8.68125 8.27969C8.67969 8.27344 8.67969 8.26875 8.67813 8.2625C8.67813 8.25937 8.67656 8.25625 8.67656 8.25313C8.675 8.24688 8.67344 8.24219 8.67344 8.23594C8.67344 8.23281 8.67188 8.22969 8.67188 8.22656C8.67031 8.22031 8.66875 8.21562 8.66719 8.20937C8.66563 8.20625 8.66562 8.20312 8.66406 8.2C8.6625 8.19531 8.66094 8.19062 8.65938 8.18437C8.65781 8.18125 8.65781 8.17812 8.65625 8.17344L8.65156 8.15938C8.65 8.15469 8.64844 8.15156 8.64688 8.14687C8.64531 8.14219 8.64375 8.13906 8.64219 8.13594C8.64062 8.13125 8.6375 8.12656 8.63594 8.12344L8.63125 8.11406C8.62813 8.10938 8.62656 8.10469 8.62344 8.1C8.62188 8.09687 8.62031 8.09375 8.61875 8.09219C8.61562 8.0875 8.6125 8.08281 8.60938 8.07656C8.60781 8.07344 8.60625 8.07188 8.60469 8.06875C8.60156 8.06406 8.59844 8.05937 8.59531 8.05312C8.59375 8.05 8.59219 8.04844 8.59062 8.04531L8.58125 8.03125C8.57969 8.02812 8.57656 8.02656 8.575 8.02344C8.57187 8.01875 8.56875 8.01562 8.56563 8.01094C8.5625 8.00781 8.55937 8.00469 8.55625 8C8.55312 7.99687 8.55 7.99375 8.54844 7.99062C8.54219 7.98438 8.53594 7.97813 8.52969 7.97031C8.52344 7.96406 8.51719 7.95781 8.50937 7.95156C8.50625 7.94844 8.50313 7.94531 8.5 7.94375C8.49687 7.94062 8.49219 7.9375 8.48906 7.93437C8.48438 7.93125 8.48125 7.92813 8.47656 7.925C8.47344 7.92344 8.47031 7.92031 8.46875 7.91875L8.45469 7.90938C8.45156 7.90781 8.45 7.90625 8.44687 7.90469L8.43281 7.89531C8.42969 7.89375 8.42813 7.89219 8.425 7.89062C8.42031 7.8875 8.41563 7.88438 8.40938 7.88281C8.40625 7.88125 8.40312 7.87969 8.40156 7.87813C8.39688 7.875 8.39219 7.87344 8.3875 7.87031L8.37813 7.86562C8.37344 7.86406 8.36875 7.86094 8.36563 7.85938C8.3625 7.85781 8.35781 7.85625 8.35469 7.85469C8.35 7.85313 8.34688 7.85156 8.34219 7.85L8.32812 7.84531C8.325 7.84375 8.32031 7.84219 8.31719 7.84219C8.3125 7.84062 8.30781 7.83906 8.30156 7.8375C8.29844 7.83594 8.29531 7.83594 8.29219 7.83437C8.2875 7.83281 8.28125 7.83125 8.275 7.82969C8.27187 7.82969 8.26875 7.82812 8.26562 7.82812C8.25937 7.82656 8.25469 7.825 8.24844 7.825C8.24531 7.825 8.24219 7.82344 8.23906 7.82344C8.23281 7.82188 8.22813 7.82188 8.22188 7.82031C8.21875 7.82031 8.21406 7.81875 8.21094 7.81875C8.20625 7.81875 8.2 7.81719 8.19531 7.81719C8.19063 7.81719 8.18594 7.81719 8.18125 7.81563C8.17656 7.81563 8.17344 7.81563 8.16875 7.81406H3.92188C3.62031 7.81406 3.375 8.05938 3.375 8.36094C3.375 8.6625 3.62031 8.90781 3.92188 8.90781H6.82031L1.13594 14.5906C1.10938 14.4937 1.09375 14.3922 1.09375 14.2875V2.7125C1.09375 2.09531 1.59531 1.59375 2.2125 1.59375H5.85156C6.15312 1.59375 6.39844 1.34844 6.39844 1.04688C6.39844 0.745313 6.15312 0.5 5.85156 0.5H2.2125C0.992188 0.5 0 1.49219 0 2.7125V14.2875C0 15.5078 0.992188 16.5 2.2125 16.5H13.7875C15.0078 16.5 16 15.5078 16 14.2875V10.6484C16 10.3469 15.7547 10.1016 15.4531 10.1016Z"
                  fill="currentColor"
                />
                <path
                  d="M14.0578 0.5H11.6922C10.6203 0.5 9.75 1.37031 9.75 2.44219V4.80781C9.75 5.88125 10.6203 6.75 11.6922 6.75H14.0578C15.1313 6.75 16 5.87969 16 4.80781V2.44219C16 1.37031 15.1297 0.5 14.0578 0.5ZM14.9062 4.80781C14.9062 5.27656 14.525 5.65625 14.0578 5.65625H11.6922C11.2234 5.65625 10.8438 5.275 10.8438 4.80781V2.44219C10.8438 1.97344 11.225 1.59375 11.6922 1.59375H14.0578C14.5266 1.59375 14.9062 1.975 14.9062 2.44219V4.80781Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_671_2977">
                  <rect width="16" height="16" fill="currentColor" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>

            <span className="font-medium text-[1rem]">{panel.button.label}</span>
          </button>
        </div>
      </article>
      {isOpen && (
        <PortalModal>
          <PortalModal.Close handleClose={handleCloseModal} />
          <div
            ref={ref}
            className="relative z-10 bg-dark-secondary rounded-xl py-10 px-8 max-w-[1100px] max-h-[90%] overflow-auto"
          >
            {panel.image && (
              <ImageFallback
                width={700}
                height={650}
                src={panel.image}
                alt={panel.title}
                className="size-full object-cover rounded-2xl"
              />
            )}
            <div className="py-8 flex flex-col gap-6 justify-between items-start h-full">
              <div>
                <h6 className="font-medium text-[1rem] mb-4">{panel.head}</h6>
                {markdownify(panel.title, "h3", "text-h4 text-light-primary font-medium mb-6")}
                {markdownify(
                  panel.description,
                  "div",
                  "text-light-quaternary text-[1rem] [&>blockquote]:font-bold [&>blockquote]:border-l-[4px] [&>blockquote]:border-light-quaternary [&>blockquote]:pl-4"
                )}
              </div>
            </div>
          </div>
        </PortalModal>
      )}
    </>
  );
};

export default PanelSessionCard;
