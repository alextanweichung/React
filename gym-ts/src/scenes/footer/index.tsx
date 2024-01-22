import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className=" bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo}/>
                <p className="my-5">
                    Company Description? Or Anything Else
                </p>
                <p> Mxpac Group All Right Reserved.</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">
                    Links 1
                </p>
                <p className="my-5">
                    Links 2
                </p>
                <p>Links 3</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">
                    Sales Contact Number :
                </p>
                <p>(+60)16 241 5224</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer