import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string>('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Connected
          const validationMessage = "Votre compte a été créé. Vous pouvez désormais vous connecter."
          const errorMessage = "";
          setValidationMessage(validationMessage);
          setErrorMessage(errorMessage);
          const user = userCredential.user;
      })
      .catch((error) => {
          // Unable to create account: return an error message
          const errorMessage = error.message;
          const validationMessage = "";
          setValidationMessage(validationMessage);
          setErrorMessage(errorMessage);
      });

  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-[70px] leading-[1.1] font-light mb-4 text-center">
          Création de compte
        </h2>
         {/* Error message */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        {/* Validation message */}
        {validationMessage && (
          <div>
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {validationMessage}
            </div>
            <div className="">
              {/* "Create my account" and "log in" buttons */}
              <Link
                to={'/pages/Login'}
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-100"
                type="submit"
              >
                Je veux me connecter !
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="max-w-md w-full">
          <form className="" onSubmit={onSubmit} >
            {/* "Email" placeholder */}
            <div className="mb-4">
              <label htmlFor="email-address" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <div className="mb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="adresseexample@gmail.com ..."
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            {/* "Password" placeholder */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Mot de passe (au moins 6 caractères)
              </label>
              <div className="mb-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="MotDePasse1234 ..."
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            {/* Bouton "créer mon compte" */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-100"
              >
                Créer mon compte
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;