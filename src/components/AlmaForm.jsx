import { useState } from "react"
import { useForm } from "react-hook-form"
import { sendCustomEmail } from "../global/email"
import { Completed } from "./completed"
import { BrandsInfo } from "./BrandsInfo"
import { PersonalInfo } from "./PersonalInfo"
import { AuthorizedPersons } from "./AuthorizedPersons"
import { StorageUsage } from "./StorageUsage"
import { FileUpload } from "./FileUpload"
import { JudicialProcess } from "./JudicialProcess"

export const AlmaForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  const [persona, setPersona] = useState("natural")
  const [judicial, setJudicial] = useState("no")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = (data) => {
    sendCustomEmail(data, judicial)
    setIsSubmitted(true)
  }

  return (
    <>
      {isSubmitted ? (
        <Completed />
      ) : (
        <section className="flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="border mt-5 mx-auto">
            <h2 className="text-md font-bold mb-4 text-start mt-5">Los campos con (*) son obligatorios</h2>

            <BrandsInfo register={register} errors={errors} setValue={setValue} />

            <PersonalInfo register={register} errors={errors} persona={persona} setPersona={setPersona} />

            <hr className="my-5" />

            <AuthorizedPersons register={register} errors={errors} />

            <hr className="my-5" />

            <StorageUsage register={register} />

            <hr className="my-5" />

            <FileUpload register={register} persona={persona} />

            <JudicialProcess register={register} judicial={judicial} setJudicial={setJudicial} />

            <section>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-orange-600 text-white text-2xl px-2 py-2 rounded-md my-5 w-64 lg:96"
                >
                  Enviar
                </button>
              </div>
            </section>
          </form>
        </section>
      )}
    </>
  )
}

