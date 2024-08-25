import avatar from "../../imgs/image-avatar.png";
function Avatar() {
  return (
    <div className="hover:border-orange w-6 cursor-pointer rounded-full hover:border-2 sm:w-12">
      <img src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
