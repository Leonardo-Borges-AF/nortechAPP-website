import { BackgroundDashed } from "~/components/BackgroundDashed.component";
import { Header } from "~/components/header/Header.components";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { onlyNumbers } from "~/utils/helpers/onlyNumbers.helper";
import { get as _get } from "lodash";
import { Yup } from "~/utils/formValidators/yupSetLocale";
import { useMutation } from "@tanstack/react-query";
import { postContact } from "~/apis/supabase";
import { Footer } from "~/components/footer/Footer.component";
import toast from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";

type TForm = {
  full_name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  message?: string;
};

export const Contact = () => {
  const schema = Yup.object().shape({
    full_name: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required().transform(onlyNumbers).min(9),
    company: Yup.string().required(),
    website: Yup.string().url().required(),
    message: Yup.string(),
  });

  const { register, handleSubmit, formState, reset } = useForm<TForm>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: postContact,
    onSuccess: () => {
      toast.success("Message sent successfully", {
        position: "top-right",
      });
    },
    onError: (error) => {
      toast.error("Error sending message", {
        position: "top-right",
      });
      console.log(error);
    },
  });

  async function woosalSubmit(data: TForm) {
    await mutateAsync(data);
    reset({
      company: "",
      email: "",
      full_name: "",
      message: "",
      phone: "",
      website: "",
    });
  }

  return (
    <div className="w-full relative flex flex-col">
      <BackgroundDashed />
      <Header />
      <div className="h-[78px]" />
      <div className="md:px-[91px] px-5 md:pt-[120px] pb-[80px] pt-[64px] relative w-full max-w-[1366px] m-auto">
        <div
          className="fixed left-0 z-[-10] top-0"
          style={{
            height: "calc(100% * 2)",
            width: "100%",
            opacity: 0.9,
            backdropFilter: "blur(0px)",
            backgroundImage:
              "url(data:image/png;base64,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)",
            background:
              "radial-gradient(circle, rgba(1,6,55,0.72) 20%, rgba(45,55,103,0) 90%)",
          }}
        ></div>
        <div className="grid gap-16 relative z-[20]">
          <div className="grid gap-6 lg:w-[921px] md:gap-6">
            <h2 className="font-main font-bold md:text-5xl text-[34px] text-white leading-tight">
              Let's talk: We look forward to hearing and helping you!
            </h2>
            <p className="font-main text-colorText md:text-xl text-baset-">
              Get in touch to clarify your doubts or obtain information, it will
              be a pleasure to assist you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(woosalSubmit)}
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-6 w-full"
          >
            <div className="grid lg:col-span-1 col-span-2 grid-cols-1 gap-2 w-full relative">
              <label
                className={`font-main text-colorText lg:text-xl text-base 
                  ${
                    formState.errors.full_name
                      ? "text-red-400"
                      : "text-colorText"
                  }`}
              >
                Name and surname
              </label>
              <input
                placeholder="Name and surname"
                className={`lg:h-[76px] h-[56px] px-4 py-[26px] rounded-lg border border-solid text-base bg-background-input focus:border-primary border-outlined
                   ${
                     formState.errors.full_name
                       ? "text-red-300 border-red-400"
                       : "text-colorText"
                   }`}
                type="text"
                id="full_name"
                style={{
                  color: "#777EA2",
                }}
                autoComplete="offauto"
                autoCorrect="off"
                {...register("full_name")}
              ></input>
              {formState.errors.full_name && (
                <p className="text-red-500 text-sm mt-2 absolute bottom-[-25px]">
                  {_get(formState.errors, "full_name.message")}
                </p>
              )}
            </div>

            <div className="grid lg:col-span-1 col-span-2 grid-cols-1 gap-2 w-full relative">
              <label
                className={`font-main text-colorText lg:text-xl text-base 
                    ${
                      formState.errors.email ? "text-red-400" : "text-colorText"
                    }`}
              >
                E-mail
              </label>
              <input
                className={`lg:h-[76px] h-[56px] px-4 py-[26px] rounded-lg border border-solid text-base bg-background-input focus:border-primary border-outlined
                      ${
                        formState.errors.email
                          ? "text-red-300 border-red-400"
                          : "text-colorText"
                      }`}
                type="email"
                id="email"
                placeholder="Contact email"
                style={{
                  color: "#777EA2",
                }}
                autoComplete="offauto"
                autoCorrect="off"
                {...register("email")}
              ></input>
              {formState.errors.email && (
                <p className="text-red-500 text-sm mt-2 absolute bottom-[-25px]">
                  {_get(formState.errors, "email.message")}
                </p>
              )}
            </div>

            <div className="grid lg:col-span-1 col-span-2 grid-cols-1 gap-2 w-full relative">
              <label
                className={`font-main text-colorText lg:text-xl text-base 
                    ${
                      formState.errors.phone ? "text-red-400" : "text-colorText"
                    }`}
              >
                Telephone
              </label>
              <InputMask
                mask="(99) 99999-9999"
                id="phone"
                className={`lg:h-[76px] h-[56px] px-4 py-[26px] rounded-lg border border-solid text-base bg-background-input focus:border-primary border-outlined
                    ${
                      formState.errors.phone
                        ? "text-red-300 border-red-400"
                        : "text-colorText"
                    }`}
                placeholder="(00) 0000 0000"
                style={{
                  color: "#777EA2",
                }}
                autoComplete="offauto"
                autoCorrect="off"
                {...register("phone")}
              />
              {formState.errors.phone && (
                <p className="text-red-500 text-sm mt-2 absolute bottom-[-25px]">
                  {_get(formState.errors, "phone.message")}
                </p>
              )}
            </div>

            <div className="grid lg:col-span-1 col-span-2 grid-cols-1 gap-2 w-full relative">
              <label
                className={`font-main text-colorText lg:text-xl text-base 
                    ${
                      formState.errors.company
                        ? "text-red-400"
                        : "text-colorText"
                    }`}
              >
                Company
              </label>
              <input
                className={`lg:h-[76px] h-[56px] px-4 py-[26px] rounded-lg border border-solid text-base bg-background-input focus:border-primary border-outlined
                      ${
                        formState.errors.company
                          ? "text-red-300 border-red-400"
                          : "text-colorText"
                      }`}
                type="text"
                id="company"
                placeholder="Enter your company name"
                style={{
                  color: "#777EA2",
                }}
                autoComplete="offauto"
                autoCorrect="off"
                {...register("company")}
              ></input>
              {formState.errors.company && (
                <p className="text-red-500 text-sm mt-2 absolute bottom-[-25px]">
                  {_get(formState.errors, "company.message")}
                </p>
              )}
            </div>

            <div className="grid col-span-2 gap-2 w-full relative">
              <label
                className={`font-main text-colorText lg:text-xl text-base hidden lg:block
                    ${
                      formState.errors.message
                        ? "text-red-400"
                        : "text-colorText"
                    }`}
              >
                Leave a message(optional)
              </label>
              <label
                className={`font-main text-colorText lg:text-xl text-base block lg:hidden
                    ${
                      formState.errors.message
                        ? "text-red-400"
                        : "text-colorText"
                    }`}
              >
                Leave a message(optional)
              </label>
              <textarea
                className={`h-[184px] px-4 py-[26px] rounded-lg border border-solid text-base bg-background-input focus:border-primary border-outlined
                      ${
                        formState.errors.message
                          ? "text-red-300 border-red-400"
                          : "text-colorText"
                      }`}
                placeholder="Write here..."
                style={{
                  background: "#13152A",
                  color: "#777EA2",
                }}
                autoComplete="offauto"
                autoCorrect="off"
                id="message"
                {...register("message")}
              ></textarea>
              {formState.errors.message && (
                <p className="text-red-500 text-sm mt-2 absolute bottom-[-25px]">
                  {_get(formState.errors, "message.message")}
                </p>
              )}
            </div>

            <button
              className="font-medium font-main text-sm w-full md:w-[200px] bg-primary text-center p-3 text-white rounded"
              style={{
                boxShadow: "0px 8px 32px 0px #5c626c52",
              }}
            >
              {isPending ? (
                <span className="mx-auto flex gap-4">
                  <TailSpin
                    visible={true}
                    height="20"
                    width="20"
                    color="#fff"
                    radius="1"
                  />
                  Send message
                </span>
              ) : (
                <span className="mx-auto">Enviar mensagem</span>
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
