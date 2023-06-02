import { useRef, useState } from "react";

import { useFormik } from "formik"; /* ---- FORMIK*/
import * as Yup from "yup"; /* ---- YUP VALIDATION*/
import emailjs from "@emailjs/browser"; /* ---- EMAILJS */

import { RiMailSendLine } from "react-icons/ri"; /* ---- REACT ICONS*/

const Formulario = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const form = useRef(); /*    MIN MAX REQUIRED  */

  /*Validation Formik/Yup start -----------*/ const valuesSchema = Yup.object({
    nombre: Yup.string()
      .min(3, "Minimo 2 caracteres")
      .max(32, "Maximo 32 caracteres")
      .required(),
      fecha: Yup.string()
      .min(3, "Minimo 2 caracteres")
      .max(32, "Maximo 32 caracteres")
      .required(),
    email: Yup.string()
      .email("Email incorrecto")
      .max(32, "Maximo 32 caracteres")
      .required(),
    telefono: Yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
      
      )
      .required()
      .min(6, "Minimo de 6 numeros")
      .max(22, "Maximo 32 numeros"),
      hora: Yup.string()
      .required(),
      cantidad: Yup.string()
      .required(),
    mensaje: Yup.string(),
  });
  const initialValues = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    fecha: "",
    hora: "",
    cantidad: "",
  };

  /*EMAILJS KEYS ----------*/
  const publicID = "xbpiozojkZAbONLnb";
  const templateID = "template_rjqmbg1";
  const serviceID = "service_ildxpli";

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    validationSchema: valuesSchema,
    initialValues,
    onSubmit: (values, actions) => {
      /*Send EMAILJS start -----------*/
      try {
        emailjs
          .sendForm(serviceID, templateID, form.current, publicID, values)
          .then(() => {
            actions.resetForm();
            setSuccessMessage(true);
            setTimeout(() => setSuccessMessage(false), 3600);
          });
      } catch (error) {
        console.log(error);
      } /*Send EMAILJS end -----------*/
    },
  });
  /*Validation Formik/Yup end-----------*/

  return (
    <div className="w-max-[1200px] mx-auto px-5">
      <form
        ref={form}
        autoComplete="off"
        className="w-full "
        onSubmit={handleSubmit}
      >
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
          <div className="">
            <input
              value={values.nombre}
              onBlur={handleBlur}
              onChange={handleChange}
              className={
                errors.nombre && touched.nombre
                  ? " border-2 placeholder-gray-800 bg-transparent  border-red-600 w-full p-2 mt-2  focus:outline-none "
                  : "border-2 placeholder-gray-800 bg-transparent border-gray-900  w-full p-2 mt-2  focus:outline-none"
              }
              type="text"
              name="nombre"
              placeholder="Nombre y apellido*"
              id="nombre"
            />
          </div>

          <div className="">
            <input
              value={values.fecha}
              onBlur={handleBlur}
              onChange={handleChange}
              name="fecha"
              className={
                errors.fecha && touched.fecha
                  ? " border-2 placeholder-gray-800 bg-transparent  border-red-600 w-full p-2 mt-2  focus:outline-none "
                  : "border-2 placeholder-gray-800 bg-transparent border-gray-900 w-full p-2 mt-2  focus:outline-none"
              }
              type="text"
              placeholder="Fecha de reserva*"
              id="fecha"
            />
          </div>

          <div className="">
            <input
              value={values.telefono}
              onBlur={handleBlur}
              onChange={handleChange}
              name="telefono"
              className={
                errors.telefono && touched.telefono
                  ? " border-2 placeholder-gray-800 bg-transparent  border-red-600 w-full p-2 mt-2  focus:outline-none "
                  : "border-2 placeholder-gray-800 bg-transparent border-gray-900 w-full p-2 mt-2  focus:outline-none"
              }
              type="tel"
              placeholder="Telefono*"
              id="telefono"
            />
          </div>

          <div>
            <select
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.hora}
              name="hora"
              className={
                errors.hora && touched.hora
                  ? " border-2 placeholder-gray-800 bg-transparent  border-red-600 w-full p-2.5 mt-2  focus:outline-none "
                  : "border-2 placeholder-gray-800 bg-transparent border-gray-900 w-full p-2.5 mt-2  focus:outline-none"
              }
           
            >
              <option  >Hora de reserva</option>
              <option  >18:00</option>
              <option  >18:30</option>
              <option  >19:00</option>
              <option  >19:30</option>
              <option  >20:00</option>
              <option  >20:30</option>
              <option  >20:30</option>
              <option  >21:00</option>
              <option  >21:30</option>
              <option  >22:00</option>
              <option  >23:00</option>
            </select>
          </div>

          <div className="">
            <input
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              name="email"
              className={
                errors.email && touched.email
                  ? " border-2 placeholder-gray-800 bg-transparent  border-red-600 w-full p-2 mt-2  focus:outline-none "
                  : "border-2 placeholder-gray-800 bg-transparent border-gray-900 w-full p-2 mt-2  focus:outline-none"
              }
              type="email"
              placeholder="Correo electronico*"
              id="email"
            />
          </div>

          <div className="">
            <input
              value={values.cantidad}
              onBlur={handleBlur}
              onChange={handleChange}
              className={
                errors.cantidad && touched.cantidad
                  ? " border-2 placeholder-gray-800 bg-transparent  border-red-600 w-full p-2 mt-2  focus:outline-none "
                  : "border-2 placeholder-gray-800 bg-transparent border-gray-900  w-full p-2 mt-2  focus:outline-none"
              }
              type="text"
              name="cantidad"
              placeholder="Cantidad de personas*"
              id="cantidad"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 items-center  mx-auto">
          <div className="w-full ">
            <textarea
              value={values.mensaje}
              onBlur={handleBlur}
              onChange={handleChange}
              id="mensaje"
              name="mensaje"
              className="border-2 placeholder-gray-800  bg-transparent border-gray-900 w-full p-2 mt-2  focus:outline-none  h-[100px] md:h-[180px]"
              placeholder="Notas aclaratorias*"
            ></textarea>
          </div>

        <div className="flex gap-6">
        <input
            type="submit"
            value="RESERVAR AHORA"
            className="hover:bg-gray-900 text-center rounded
                     p-3 px-10  cursor-pointer text-orange-500/90 uppercase font-medium
                     bg-white transition-all "
          />
          {/* SUCCESS MESSAGE / FORMIK YUP VALIDATION ------*/}
          {successMessage && (
           <p className="text-[12px] bg-gray-600 text-orange-500 p-2 flex justify-center items-center uppercase gap-2 ">
           <RiMailSendLine size={20} />
           Mensaje enviado
         </p>
          )}


        </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
