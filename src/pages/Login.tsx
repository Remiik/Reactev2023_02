import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onLogin: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Connected
        const user = userCredential.user;
        navigate("/")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
        <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-center">Connexion</h1>
        {/* Error message */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        <form className="">
          <div className="mb-4">
            {/* Placeholder "email" */}
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email-address">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email-address"
              name="email"
              type="email"
              placeholder="adresseexemple@gmail.com ..."
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            {/* Placeholder "mot de passe" */}
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="MotDePasse1234..."
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            {/* Button "se connecter" and "créer mon compte" */}
            <button
              onClick={onLogin}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-100"
              type="submit"
            >
              Se connecter
            </button>
            <Link
              to="/pages/SignUp"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-100"
              type="createaccount"
            >
              Créer un compte
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
