import { FaFacebookF, FaInstagram, FaTiktok} from "react-icons/fa";

function Footer ()
{
	return (
		<div className="h-16 bg-gradient-to-r from-indigo-900 to-indigo-600 flex items-center justify-between p-5 md:px-24 text-slate-200">
			<div>
				<h1>Copyright | QualityTeam</h1>
			</div>
			<div className="flex items-center justify-between gap-5">
				<FaFacebookF />
				<FaInstagram />
				<FaTiktok />
			</div>
		</div>
	)
}

export default Footer;