import { useRef, useState } from "react"
import { RiCheckboxBlankLine, RiCheckboxFill } from "react-icons/ri"
import useRequestContext from "../hooks/use_request_context"
import { FaRegCalendar } from "react-icons/fa6"

const UserForm = ({setStep}: {setStep: React.Dispatch<React.SetStateAction<number>>}) => {
    const { formData, setFormData } = useRequestContext()
    const fromPicker = useRef<HTMLInputElement>(null)
    const toPicker = useRef<HTMLInputElement>(null)

    const nameOriginOptions = ['No preference', 'English', 'Spanish', 'French', 'German', 'Italian', 'Scandinavian', 'Irish', 'Indian', 'Arabic', 'African', 'Japanese', 'Chinese', 'Korean', 'Russian', 'Greek', 'Hebrew', 'Latin', 'Native American', 'Hawaiian', 'Portugese', 'Dutch', 'Hungarian', 'Polish', 'Turkish', 'Elvish', 'Westerosi', 'Galactic', 'Hogwarts', 'Dystopian', 'Mythological', 'Fantasy', 'Sci-fi', 'Other']

    const meaningOptions = ['No preference', 'Nature', 'Strength', 'Love', 'Virtue', 'Luck', 'Happiness', 'Courage', 'Wisdom', 'Beauty', 'Peace', 'Celestial', 'Mythical', 'Artistic', 'Historic', 'Spiritual', 'Other']

    const handleOpenCalendar1 = () => {
      // Trigger the native input's click event
      if (fromPicker.current) {
        fromPicker.current.showPicker(); // Only supported in modern browsers
      }
    };

    const handleOpenCalendar2 = () => {
      // Trigger the native input's click event
      if (toPicker.current) {
        toPicker.current.showPicker(); // Only supported in modern browsers
      }
    };


    const updateGender = (gender: string) => {
        setFormData({ ...formData, gender: gender })
    }

    const updateSelectItems = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const updateNameType = (name_type: string) => {
        setFormData({ ...formData, name_type: name_type })
    }

    const updateNameVersion = (version: string) => {
        setFormData({ ...formData, version: version })
    }

    const toggleNotPregnant = () => {
      setFormData({ ...formData, not_pregnant: !formData.not_pregnant, due_date: ''})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setStep(1)
    }


    return (
        <section className="flex items-center p-4 md:p-12 shadow-lg flex-col gap-5 rounded-lg  bg-[#f8f7ee] text-black  w-full max-w-2xl">
        <p tabIndex={0} className="text-center font-sub pb-6 border-b-[1.8px] border-b-gray-300">
          Welcome to the Mother of Invention Baby Name Generator. We know how exciting (and challenging) it is to find the perfect name for your little one, so we've leveraged the latest AI technology to help you discover the perfect custom-tailored name.
        </p>
        <form className="w-[100%] flex flex-col gap-[34px]" noValidate onSubmit={handleSubmit}>
          <div tabIndex={0}  className="flex flex-col font-sub max-w-xs">
              <h2 className="text-lg font-main font-bold">
                What is the baby's gender?
              </h2>
            <div tabIndex={0} className="flex w-[100%] py-[8px] justify-between items-center cursor-pointer" onClick={() => {updateGender("BOY")}} >
              <p className="text-[14px]">
                Boy
              </p>
              {
                formData.gender === "BOY" ? <div className="flex justify-center items-center w-[24px] h-[24px] border border-black rounded-full">
                <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border border-gray-500 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between items-center cursor-pointer py-[8px]" onClick={() => {updateGender("GIRL")}} >
              <p className="text-[14px]">
                Girl
              </p>
              {
                formData.gender === "GIRL" ? <div className="flex justify-center items-center w-[24px] h-[24px] border border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border border-gray-500 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between items-center cursor-pointer  py-[8px]" onClick={() => {updateGender("UNKNOWN")}}>
              <p className="text-[14px]">
                Unknown
              </p>
              {
                formData.gender === "UNKNOWN" ? <div className="flex justify-center items-center w-[24px] h-[24px] border border-black rounded-full">
                <div className="w-[14px] h-[14px] rounded-full bg-black" />
              </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border border-gray-500 rounded-full" />
              }
            </div>
          </div>

          <label htmlFor="name_origin" className="flex flex-col max-w-xs" tabIndex={0}>
            <h2 className="text-lg font-main py-[0.5rem] font-bold">
              What is your preferred name origin?
            </h2>
            <select tabIndex={0} name="name_origin" id="name_origin" className="cursor-pointer focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full w-[100%] border-[1px] border-gray-400 appearance-none font-sub text-[14px] max-w-xs" value={formData.name_origin} onChange={updateSelectItems}>
              {
                nameOriginOptions.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))
              }
            </select>
          </label>

          <label htmlFor="meaning" className="flex flex-col w-fit" tabIndex={0}>
            <h2 className="text-lg font-main  py-[0.5rem] font-bold">
              Would you like the name to have a specific meaning or theme?
            </h2>
            <select tabIndex={0} name="meaning" id="meaning" className="cursor-pointer focus:outline-2 focus:outline-gray-300 py-3 px-4 outline-none rounded-full w-[100%] border border-gray-400 font-sub max-w-xs appearance-none text-[14px]" value={formData.meaning} onChange={updateSelectItems}>
              {
                meaningOptions.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))
              }
            </select>
          </label>

          <div tabIndex={0}  className="flex flex-col font-sub w-[100%]">
              <h2 className="text-lg font-main font-bold">
                Do you want a popular or unique name?
              </h2>
            <div tabIndex={0} className="flex py-[8px] max-w-xs justify-between items-center cursor-pointer" onClick={() => {updateNameType("POPULAR")}} >
              <p className="text-[14px]">
                Popular
              </p>
              {
                formData.name_type === "POPULAR" ? <div className="flex justify-center items-center w-[24px] h-[24px] border border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border border-gray-500 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex justify-between max-w-xs items-center cursor-pointer  py-[8px]" onClick={() => {updateNameType("UNIQUE")}} >
              <p className="text-[14px]">
                Unique
              </p>
              {
                formData.name_type === "UNIQUE" ? <div className="flex justify-center items-center w-[24px] h-[24px] border border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border border-gray-500 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex max-w-xs justify-between sm:w-[330px] items-center cursor-pointer py-[8px]" onClick={() => {updateNameType("NO PREFERENCE")}}>
              <p className="text-[14px]">
                No preference
              </p>
              {
                formData.name_type === "NO PREFERENCE" ? <div className="flex justify-center items-center w-[24px] h-[24px] border border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border border-gray-500 rounded-full" />
              }
            </div>
          </div>

          <label htmlFor="names_avoid" tabIndex={0}  className="flex flex-col font-sub w-fit">
            <h2 className="text-lg font-main py-[0.5rem] font-bold">
              Are there any names you would like to avoid due to personal reasons or associations?
            </h2>
            <input type="text" name="names_avoid" id="names_avoid" value={formData.names_avoid} onChange={updateInput} placeholder="e.g. Gary, Robyn, Sam" className="focus:outline-2 focus:outline-gray-300 outline-none py-3 px-4 rounded-full max-w-xs border-[1px] border-gray-400 appearance-none font-sub text-[16px] xl:text-[18px]"  />
          </label>

          <div tabIndex={0}  className="flex flex-col font-sub w-[100%]">
              <h2 className="text-lg font-main font-bold">
                Would you like a name with a nickname or shortened version?
              </h2>
            <div tabIndex={0} className="flex justify-between py-[8px] max-w-xs items-center cursor-pointer" onClick={() => {updateNameVersion("Yes")}} >
              <p className="text-[14px]">
                Yes
              </p>
              {
                formData.version === "Yes" ? <div className="flex justify-center items-center w-[24px] h-[24px] border border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border border-gray-500 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex justify-between max-w-xs py-[8px] items-center cursor-pointer" onClick={() => {updateNameVersion("No")}} >
              <p className="text-[14px]">
                No
              </p>
              {
                formData.version === "No" ? <div className="flex justify-center items-center w-[24px] h-[24px] border border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border border-gray-500 rounded-full" />
              }
            </div>

            <div tabIndex={0} className="flex w-[100%] justify-between max-w-xs py-[8px] items-center cursor-pointer" onClick={() => {updateNameVersion("NO PREFERENCE")}}>
              <p className="text-[14px]">
                No preference
              </p>
              {
                formData.version === "NO PREFERENCE" ? <div className="flex justify-center items-center w-[24px] h-[24px] border border-black rounded-full">
                  <div className="w-[14px] h-[14px] rounded-full bg-black" />
                </div> : <div className="flex justify-center items-center w-[24px] h-[24px] border border-gray-500 rounded-full" />
              }
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[100%]">
            <h2 className="text-lg font-main py-[0.5rem] font-bold">
              What is your baby's due date? (So we can take into account their astrological sign)
            </h2>

            <label
              htmlFor="due_date"
              tabIndex={0}
              className="flex flex-col font-sub max-w-xs relative"
            >
                {/* Date input field */}
              <input
                ref={fromPicker} // Attach the ref here
                type="date"
                disabled={formData.not_pregnant}
                name="due_date"
                id="due_date"
                value={formData.due_date}
                onChange={updateInput}
                className="focus:outline-2 focus:outline-gray-300 outline-none h-[54px] px-4 rounded-full max-w-xs border-[1px] border-gray-400 cursor-pointer appearance-none font-sub text-[16px] xl:text-[18px]"
              />
              {/* Calendar icon */}
              <div
                className="cursor-pointer text-black absolute bottom-5 right-5"
                onClick={handleOpenCalendar1}
              >
                <FaRegCalendar size={14} />
              </div>
            </label>
            <label htmlFor="not_pregnant" className="flex items-center gap-2 font-sub w-fit cursor-pointer" onClick={toggleNotPregnant}>
              {
                formData.not_pregnant ? <RiCheckboxFill className="w-5 h-5"  /> : <RiCheckboxBlankLine className="w-5 h-5"  />
              }
              <p className="text-[14px] font-medium">
                I'm not pregnant yet
              </p>
            </label>
          </div>

          <button type="submit" className="w-fit px-[1rem] bg-[#6b6ea5] rounded-full self-center text-white font-[700] tracking-tight h-[3rem] min-h-[3rem] text-[14px]">
            Generate Names
          </button>
        </form>
      </section>
    )
}

export default UserForm