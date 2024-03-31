import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
	return (
		<div className="fixed bottom-0 w-full px-4 border-t bg-slate-100">
			{/* specific width control of children - weird way to not allow the logo visible */}
			<div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
				<Logo />
				<div className="md:max-w-screen-2xl w-full space-x-4 flex justify-between items-center">
					<Button size="sm" variant="ghost">
						Privacy Policy
					</Button>
					<Button size="sm" variant="ghost">
						Terms of Service
					</Button>
				</div>
			</div>

		</div>
	);
};