import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

const footer = () => {
  const [session] = useSession();
  const router = useRouter();
  return (
    <div className="bg-amazon_blue ">
      <h3 className="link hover:underline-none p-4 bg-amazon_blue-light text-white text-sm grid grid-cols-1 text-bold place-items-center">
        {" "}
        Back to top
      </h3>
      <div className="grid grid-flow-row-dense grid-cols-4 text-white w-100% m-auto p-10">
        <div>
          <h2 className="font-bold">Get to know us</h2>
          <p className="link text-gray-400">Careers</p>
          <p className="link text-gray-400">Blog</p>
          <p className="link text-gray-400">About Amazon</p>
          <p className="link text-gray-400">Investor Relations</p>
          <p className="link text-gray-400">Amazon Devices</p>
          <p className="link text-gray-400">Amazon Tour</p>
        </div>

        <div>
          <h2 className="font-bold">Make Money with Us</h2>
          <p className="link text-gray-400">Sell products on Amazon</p>
          <p className="link text-gray-400">Sell on Amazon Business</p>
          <p className="link text-gray-400">Sell apps on Amazon</p>
          <p className="link text-gray-400">Become an Affiliate</p>
          <p className="link text-gray-400">Advertis Your Products</p>
          <p className="link text-gray-400">Self-Publish with Us</p>
          <p className="link text-gray-400">Host an Amazon Hub</p>
          <p className="link text-gray-400">
            <b> {">"}</b> See More Make Money <br /> with Us
          </p>
          <p className="link text-gray-400"></p>
        </div>

        <div>
          <h2 className="font-bold">Amazon Payement Products</h2>
          <p className="link text-gray-400">Amazon Business Card</p>
          <p className="link text-gray-400">Shop with Points</p>
          <p className="link text-gray-400">Reload Ypur Balance</p>
          <p className="link text-gray-400">Amazon Currency Converter</p>
        </div>

        <div>
          <h2 className="font-bold">Let Us Help You</h2>
          <p className="link text-gray-400">
            Amazon and <br /> COVID-19
          </p>
          <p className="link text-gray-400">Your Account</p>
          <p className="link text-gray-400">Your Orders</p>
          <p className="link text-gray-400">
            Shipping Rates & <br /> Polices
          </p>
          <p className="link text-gray-400">
            Return & <br /> Replacements
          </p>
          <p className="link text-gray-400">
            Manage Your <br /> Content and Devices
          </p>
          <p className="link text-gray-400">Amazon Assistant</p>
          <p className="link text-gray-400">Help</p>
        </div>
      </div>
      <div className="flex flex-col-reverse divide-y divide-y-reverse divide-gray-400 ">
        <p className="grid grid-cols-1 p-5  place-items-center">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </p>
        <p
          onClick={!session ? signIn : signOut}
          className=" text-white grid grid-cols-1 link  place-items-center p-5 text-bold hover:text-gray-500"
        >
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default footer;
