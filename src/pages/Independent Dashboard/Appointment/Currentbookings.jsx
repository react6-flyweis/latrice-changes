import moment from "moment";
import { Link } from "react-router-dom";
import RightDivAppointment from "./RightDivAppointment";
import { useState } from "react";
import {
  BussinessChangeBookingDateTimeMOdal,
  BussinessResheduleSuccessModal,
  CancelThisbookingModal,
} from "../../../components/Modals/Modal";
import IndependentDashboardLayout from "../../../components/DashbaordLayout/Independent Dashbaord";
import { TiArrowSortedDown } from "react-icons/ti";
import { ProfessionalBookingDetailsModal } from "../../../components/Modals/ProfessionalBookingDetailsModal";
import { ProfessionalNeedHelpBookingDetailsModal } from "../../../components/Modals/ProfessionalNeedHelpModal";

const times = [
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
];

const dates = [
  moment("2025-02-25"),
  moment("2025-02-26"),
  moment("2025-02-27"),
  moment("2025-02-28"),
];

const appointments = [
  {
    date: "2025-02-25",
    time: "08:30 AM",
    title: "Hair Cut",
    location: "Customer Name",
    price: "$46.00",
    endTime: "09:00 AM",
  },
  {
    date: "2025-02-26",
    time: "08:30 AM",
    title: "Hair Cut",
    location: "Customer Name",
    price: "$46.00",
    endTime: "09:00 AM",
  },
  {
    date: "2025-02-27",
    time: "08:30 AM",
    title: "Hair Cut",
    location: "Customer Name",
    price: "$46.00",
    endTime: "09:00 AM",
  },
  {
    date: "2025-02-28",
    time: "08:30 AM",
    title: "Hair Cut",
    location: "Customer Name",
    price: "$46.00",
    endTime: "09:00 AM",
  },
  {
    date: "2025-02-26",
    time: "10:30 AM",
    title: "Hair Cut",
    location: "Customer Name",
    price: "$46.00",
    endTime: "11:00 AM",
  },
  {
    date: "2025-02-25",
    time: "12:30 PM",
    title: "Hair Cut",
    location: "Customer Name",
    price: "$46.00",
    endTime: "01:00 PM",
  },
  {
    date: "2025-02-27",
    time: "11:30 AM",
    title: "Hair Cut",
    location: "Customer Name",
    price: "$46.00",
    endTime: "12:00 PM",
  },
];

const routeMapping = {
  "Current bookings": "/independent/dashboard/appointments/current-bookings",
  "Upcoming bookings": "/independent/dashboard/appointments/upcoming-bookings",
  "Past bookings": "/independent/dashboard/appointments/past-bookings",
  "Claim/Dispute": "/independent/dashboard/appointments/claim/dispute-bookings",
};

export default function Independenturrentbookings() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Customer Bookings");

  const locations = ["Customer Bookings", "Personal Bookings"];

  const handlopensecond = () => {
    setModalOpen(false);
    setModalOpen1(true);
  };
  const handlopenThird = () => {
    setModalOpen1(false);
    setModalOpen2(true);
  };

  const handlopenCancel = () => {
    setModalOpen(false);
    setModalOpen3(true);
  };
  const handlopenbackCancel = () => {
    setModalOpen(true);
    setModalOpen3(false);
  };

  const handleOpenNeedHelp = () => {
    setModalOpen(false);
    setHelpModalOpen(true);
  };

  return (
    <IndependentDashboardLayout
      title="Appointment Scheduling"
      gpnumber="8"
      titleAction={
        <div className="relative inline-block text-center border border-[#2F2F2F] bg-[#FAF9F6] rounded-[10px]">
          {/* Selected location and icon */}
          <div
            className="flex items-center gap-1 cursor-pointer px-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="font-rasa font-[600] sm:text-[28px] text-[20px] text-[#2F2F2F]">
              {selectedLocation}
            </p>
            <TiArrowSortedDown
              size={20}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              color="#2F2F2F"
            />
          </div>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute mt-2 z-10 w-[240px] bg-[#FAF9F6] border border-[#2F2F2F] rounded-[10px]">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="px-2  font-rasa font-[600] sm:text-[28px] text-[20px] text-[#2F2F2F] cursor-pointer"
                  onClick={() => {
                    setSelectedLocation(location);
                    setIsOpen(false);
                  }}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
      }
    >
      <ProfessionalBookingDetailsModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        handleOpenSecond={handlopensecond}
        handleOpenCancel={handlopenCancel}
        showBlockOption={selectedLocation === "Customer Bookings"}
        handleOpenHelp={handleOpenNeedHelp}
      />
      <BussinessChangeBookingDateTimeMOdal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
        handlopenThird={handlopenThird}
      />
      <ProfessionalNeedHelpBookingDetailsModal
        isOpen={isHelpModalOpen}
        onClose={() => setHelpModalOpen(false)}
        handleBack={() => {
          setHelpModalOpen(false);
          setModalOpen(true);
        }}
      />
      <BussinessResheduleSuccessModal
        isOpen={isModalOpen2}
        onClose={() => setModalOpen2(false)}
      />
      <CancelThisbookingModal
        isOpen={isModalOpen3}
        onClose={() => setModalOpen3(false)}
        handlopenbackCancel={handlopenbackCancel}
      />
      <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
        <div className="flex-1 overflow-auto">
          {/* Tabs */}
          <div className="flex flex-wrap w-full overflow-hidden justify-center sm:justify-between gap-2 sm:gap-1 mb-3">
            {[
              "Current bookings",
              "Upcoming bookings",
              "Past bookings",
              "Claim/Dispute",
            ].map((item, index) => (
              <Link key={index} to={routeMapping[item]}>
                <button
                  className={`p-2 sm:px-6 text-[16px] sm:text-[20px] font-medium font-rasa rounded-[10px] border transition-all duration-200 ${
                    item === "Current bookings"
                      ? "bg-[#123E41] text-[#FAF9F6] border-2 border-[#FAF9F6]"
                      : "text-[#2F2F2F] border-2 border-[#2F2F2F]"
                  }`}
                  style={{
                    border: "1px solid red",
                    borderColor:
                      item === "Current bookings" ? "#FAF9F6" : "#2F2F2F",
                  }}
                >
                  {item}
                </button>
              </Link>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-[#123E41]">
                <tr>
                  <th className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 rounded-tl-2xl">
                    TIME
                  </th>
                  {dates.map((date, i) => (
                    <th
                      key={i}
                      className="font-[700] font-rasa sm:text-[18px] text-[15px] text-[#FAF9F6] p-2 last:rounded-tr-2xl"
                    >
                      {date.format("MMM DD YYYY")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white shadow">
                {times.map((time, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border-b-1 border-[#A8A8A84D] font-rasa text-[#464646] font-[400] text-center text-[18px] py-2">
                      {time}
                    </td>
                    {dates.map((date, colIndex) => {
                      const appointment = appointments.find(
                        (appt) =>
                          appt.date === date.format("YYYY-MM-DD") &&
                          appt.time === time
                      );
                      const borderColors = [
                        "#123E41",
                        "#FF827F",
                        "#FFCC4E",
                        "#123E41",
                      ];
                      const borderColor =
                        borderColors[colIndex % borderColors.length];

                      return (
                        <td
                          key={colIndex}
                          className="border border-[#A8A8A84D] h-20  relative"
                        >
                          {appointment ? (
                            <div
                              className="p-2 h-full cursor-pointer"
                              style={{
                                borderLeft: `4px solid ${borderColor}`,
                              }}
                              onClick={() => setModalOpen(true)}
                            >
                              <h6 className="font-[500] font-rasa sm:text-[18px] text-[15px] text-charcoal">
                                {appointment.title}
                              </h6>
                              <div className="font-[500] font-rasa sm:text-[18px] text-[15px] text-charcoal">
                                {appointment.location}
                              </div>
                              <div className="font-[400] font-rasa sm:text-[15px] text-[12px] text-charcoal">
                                {appointment.price}
                              </div>
                              <div className="font-[400] font-rasa sm:text-[12px] text-[10px] text-[#00000080]">
                                {appointment.time} to {appointment.endTime}
                                {appointment.status && (
                                  <span> ({appointment.status})</span>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div
                              className="w-full h-full"
                              style={{
                                borderLeft: `4px solid ${borderColor}`,
                              }}
                            ></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:w-fit w-full sm:max-w-1/3">
          <RightDivAppointment />
        </div>
      </div>
    </IndependentDashboardLayout>
  );
}
