import React from "react";
import { useForm } from "../../hooks/useForm";

export default function AplicationFormPage() {
  const { form, onChange, resetState } = useForm({
    primeiroNome: "",
    idade: 0,
    email: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmittion = (event) => {
    event.preventDefault();

    console.log(form);
    resetState();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmittion}>
        <input
          value={form.primeiroNome}
          name="primeiroNome"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{3,}"
          title="Nó minimo 3 letras"
          required
        />
        <input
          value={form.idade}
          name="idade"
          onChange={handleInputChange}
          min="18"
          type="number"
          required
        />
        <input
          value={form.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          required
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}