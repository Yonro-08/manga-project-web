import c from "./ProfileImage.module.scss";

interface ProfileImage {
	avatar?: string;
}

function ProfileImage({ avatar }: ProfileImage) {
	return (
		<div className={c.profileImage}>
			{avatar ? (
				<img src={avatar} alt="" />
			) : (
				<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
				</svg>
			)}
		</div>
	);
}

export default ProfileImage;
