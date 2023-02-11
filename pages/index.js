import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Veltan Game Development</title>
				<meta name="description" content="Veltan Game Development" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="test.png" />
			</Head>
			<div
				className=" "
				// style={{ backgroundImage: `url(stanga.png), url(dreapta.png)` }}
			>
				{/* <div className="flex h-[100vh] bg-[#8d9163]">
					<div
						className="w-1/2 h-[100vh] bg-cover bg-left bg-no-repeat z-20"
						style={{ backgroundImage: `url(stanga.png)` }}
					/>
					<div class=" flex items-center ">
						<img src="logoSite.png" alt="your image" class="w-[70vw] h-96 z-1 " />
					</div>
					<div
						className="w-1/2 z-30 h-[100vh] bg-cover bg-right bg-no-repeat"
						style={{ backgroundImage: `url(dreapta.png)` }}
					/>
				</div> */}

				<div className="flex h-[100vh] bg-[#8d9163] ">
					<div className="md:block hidden">
						{" "}
						<img src="stanga.png" alt="your image" class="w-[460rem] h-[100vh]" />
					</div>
					<div className="">
						<img
							src="logoSite.png"
							alt="your image"
							class="absolute -top-1/2 left-0 bottom-0 right-0 m-auto "
							style={{ width: "656px", height: "380px" }}
						/>
					</div>{" "}
					<div className="mt-[40rem] flex justify-center  md:grid md:grid-cols-3 w-full md:-mx-40">
						<Link target="_blank" href="https://www.instagram.com/velt4n/?next=%2F">
							{" "}
							<img className="w-28 h-28 hover:scale-110" alt="..." src="InstagramLogo.png"></img>
						</Link>
						<Link
							target="_blank"
							href=" https://www.linkedin.com/in/vlad-veltan-800246230/?trk=public_profile_browsemap&originalSubdomain=ro

"
						>
							{" "}
							<img
								className="w-28 h-28 z-20 absolute hover:scale-110"
								alt="..."
								src="linkedLogo.png"
							></img>
						</Link>

						<Link href="mailto:veltandev@gmail.com?subject= &body=">
							<img
								className="w-28 h-28 z-20 absolute hover:scale-110"
								alt="..."
								src="MailLogo.png"
							></img>
						</Link>
					</div>
					<div className="md:block hidden">
						<img src="dreapta.png" alt="your image" class="h-full w-[460rem]" />
					</div>
				</div>
			</div>
		</>
	);
}
