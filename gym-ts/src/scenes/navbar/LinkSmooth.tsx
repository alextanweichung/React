import { SelectedPage } from "@/shared/types";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const LinkSmooth = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

    // Check if the current page is SignUp
    const isSignUp = page.toLowerCase() === "signup";

  return (
    <>
    {isSignUp ? (
        <Link
          to="/"
          className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300
          `}
          onClick={() => setSelectedPage(lowerCasePage as SelectedPage)}
        >
          {page}
        </Link>
      ) : (
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage as SelectedPage)}
        >
        {page}
        </AnchorLink>
    )}
    </>
  )
}

export default LinkSmooth