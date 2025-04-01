import { useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

export function Register() {
  const mensajeError = "Este campo es obligatorio";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState([]);

  const onSubmit = (data) => {
    handleEnviar(data);
  };

  const handleEnviar = (formData) => {
    setData((prevData) => [...prevData, formData]);
  };

  ////////////////////////////////////////

  const handleBorrar = () => {
    setData(data.slice(0, -1));
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          {/* Nombre */}
          <div className="col-md-4">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              {...register("nombre", { required: true })}
              className="form-control"
            />
            {errors.nombre && (
              <p style={{ color: "rgb(168, 29, 29)" }}>{mensajeError}</p>
            )}
          </div>

          {/* apellidos */}
          <div className="col-md-4">
            <label className="form-label">Apellidos</label>
            <input
              type="text"
              {...register("apellidos", { required: mensajeError })}
              className="form-control"
            />
            {errors.apellidos && (
              <p style={{ color: "rgb(168, 29, 29)" }}>
                {errors.apellidos.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="col-md-4">
            <label className="form-label">Email</label>
            <div className="input-group">
              <input
                type="text"
                {...register("email", {
                  required: mensajeError,
                  pattern: {
                    value: /^[\w-.]+$/,
                    message: "El formato del email es incorrecto",
                  },
                })}
                className="form-control"
              />
              <span className="input-group-text">@gmail.com</span>
            </div>
            {errors.email && (
              <p style={{ color: "rgb(168, 29, 29)" }}>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Ciudad */}
          <div className="col-md-6">
            <label className="form-label">Ciudad</label>
            <input
              type="text"
              {...register("ciudad", { required: true })}
              className="form-control"
            />
            {errors.ciudad && (
              <p style={{ color: "rgb(168, 29, 29)" }}>{mensajeError}</p>
            )}
          </div>

          {/* País */}
          <div className="col-md-3">
            <label className="form-label">País</label>
            <select
              className="form-select"
              {...register("pais", { required: true })}
            >
              <option value="">Elige...</option>
              <option value="Spain">Spain</option>
              <option value="USA">USA</option>
              <option value="Japan">Japan</option>
              <option value="Mexico">Mexico</option>
            </select>
            {errors.pais && (
              <p style={{ color: "rgb(168, 29, 29)" }}>{mensajeError}</p>
            )}
          </div>

          {/* Checkbox */}
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                {...register("check", { required: true })}
              />
              <label className="form-check-label">
                Acepto los términos y condiciones
              </label>
            </div>
            {errors.check && (
              <p
                style={{
                  color: "rgb(168, 29, 29)",
                }}
              >
                {mensajeError}
              </p>
            )}
          </div>

          {/* Botón de envío */}
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </main>
      <div>
        {/* TABLAA */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Email</th>
              <th scope="col">Ciudad</th>
              <th scope="col">País</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.nombre}</td>
                <td>{item.apellidos}</td>
                <td>{item.email}@gmail.com</td>
                <td>{item.ciudad}</td>
                <td>{item.pais}</td>
                <td>
                  <button onClick={handleBorrar} className="btn btn-primary">
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
