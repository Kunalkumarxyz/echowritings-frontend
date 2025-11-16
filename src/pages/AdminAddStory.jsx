// src/pages/AdminAddStory.jsx
import AddStoryForm from "../components/AddStoryForm.jsx";
import { useNavigate } from "react-router-dom";

export default function AdminAddStory(){
  const navigate = useNavigate();

  // onAdded receives the saved post (backend or local)
  function handleAdded(post){
    // if backend used, nothing else needed; if local saved, we ensure localStorage is set
    // navigate to stories so user can see it
    navigate('/stories');
  }

  return (
    <div className="container-px mx-auto py-12 max-w-3xl">
      <h1 className="section-title text-center">Admin — Add Story</h1>
      <p className="muted text-center mt-2">Use this to add a story. Backend will be used when VITE_BACKEND_URL is set.</p>

      <div className="mt-8">
        <AddStoryForm onAdded={handleAdded} />
      </div>
    </div>
  );
}
