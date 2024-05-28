import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
        
      <button  className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600" onClick={() => navigate('/')}>HOME</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos ea
        inventore cupiditate debitis, alias illo hic voluptatum tempore odit
        animi dolore quod assumenda adipisci tempora temporibus? At, facilis
        rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos ea
        inventore cupiditate debitis, alias illo hic voluptatum tempore odit
        animi dolore quod assumenda adipisci tempora temporibus? At, facilis
        rerum?
      </p>
    </div>
  );
};

export default About;
