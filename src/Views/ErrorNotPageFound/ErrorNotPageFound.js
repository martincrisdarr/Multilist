import React from 'react'

function ErrorNotPageFound() {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center flex-col gap-6'>
        <h1 className='text-4xl font-semibold'>Error 404 Page Not Found</h1>
        <img src="https://img.freepik.com/vector-gratis/advertencia-red-internet-404-error-pagina-o-archivo-no-encontrado-pagina-web-pagina-error-internet-o-problema-no-encontrado-red-error-404-presente-hombre-durmiendo-pantalla_1150-55450.jpg?t=st=1657909178~exp=1657909778~hmac=341d44a5eca7718e3ef75e188025b6dae030c7ff9b7bbb0c13337760fbd65049&w=826" alt="404 error" className='h-[70%] ' />
      </div>
    </>
  )
}

export default ErrorNotPageFound