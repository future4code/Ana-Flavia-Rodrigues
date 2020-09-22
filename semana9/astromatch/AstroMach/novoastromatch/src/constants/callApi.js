import axios from "axios";


export const getProfile = (funcaoGuardar) => {
  axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:flavia/person")
    .then((response) => {
        funcaoGuardar(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMatches = (funcaoMatch) => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/flavia/matches")
      .then((response) => {
            
          funcaoMatch(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  export const postChoosePerson = () => {
    const body= {
      id:'',
	    choice: true
    }
    axios
      .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:flavia/choose-person", body)
      .then((response) => {
       
        window.alert('DEU MATCH')

          
      })
      .catch((error) => {
        console.log(error);
      });
  };




  