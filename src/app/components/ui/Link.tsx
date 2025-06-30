import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
	children,
	href,
	className,
	onClick,
	...props
}) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (href?.startsWith("#") && href.length > 1) {
			e.preventDefault();
			const targetId = href.substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 80, // header height
					behavior: "smooth",
				});
			}

			if (onClick) onClick(e);
		}
	};

	return (
		<a href={href} className={className} onClick={handleClick} {...props}>
			{children}
		</a>
	);
};
