import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialSignIn = () => {

    const { googleSignIn, githubSignIn, setLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSocialSignIn = socialProvider => {
        socialProvider ()
        .then(result => {
            if(result.user){
                setLoading(false)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully signed in",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate (location?.state || '/')
            }
        })
        
    } 

    return (     
            <div className="my-6 space-y-4">
                    <button onClick={() => handleSocialSignIn(googleSignIn)} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <p><FcGoogle size={20} /></p>
                        <p>Login with Google</p>
                    </button>
                    <button onClick={() => handleSocialSignIn(githubSignIn)} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <p><VscGithub size={20} />
                        </p>
                        <p>Login with GitHub</p>
                    </button>
                </div>           
        
    );
};

export default SocialSignIn;