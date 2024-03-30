import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="fixed top-0 w-full h-14 px-4 border-b-shadow-sm bg-white flex items-center">
			{/* specific width control of children - weird way to not allow the logo visible */}
			<div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
				<Logo />
				<div className="md:max-w-screen-2xl w-full space-x-4 flex justify-between items-center">
					<Button size="sm" variant="outline" asChild>
						<Link href="/sign-in">Login</Link>
					</Button>
					<Button asChild>
						<Link href="/sign-up">Get Taskify For Free</Link>
					</Button>
				</div>
			</div>

		</div>
	);
};
