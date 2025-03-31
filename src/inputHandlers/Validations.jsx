import { useState } from "react";

export function ValidationInput() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function handleInput(e) {
    const value = e.target.value;
    setInput(value);
    handleError(value);
  }

  function handleError(value) {
    if (!/^[A-Za-z\s]+$/.test(value)) {
      setError("Debe contener letras");
    } else {
      setError("");
    }
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        required
        onChange={handleInput}
        className="form-control"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
    </div>
  );
}
// VALIDACION PARA EL EMAIL

export function ValidationEmail() {
  const [error, setError] = useState("");

  function handleEmailError(e) {
    const emailValue = e.target.value;

    const regex = /^[A-Za-z0-9._%+-]+$/;

    if (!regex.test(emailValue)) {
      setError("El correo debe ser válido");
    } else {
      setError("");
    }
  }

  return (
    <>
      <div>
        <span className="input-group-text" id="inputGroupPrepend">
          <input
            type="text"
            required
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            onChange={handleEmailError}
          />
          @gmail.com
        </span>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      </div>
    </>
  );
}
