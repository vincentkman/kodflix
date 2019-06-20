import batman from '../coverImages/batman.jpg';
import homeAlone from '../coverImages/homealone.jpg';
import inception from '../coverImages/inception.jpg';
import jurassicPark from '../coverImages/jurassicpark.png';
import lordOfTheRings from '../coverImages/lordoftherings.jpg';
import matrix from '../coverImages/matrix.jpg';
import pulpFiction from '../coverImages/pulpfiction.jpg';
import lastSamurai from '../coverImages/thelastsamurai.jpg';
import toyStory from '../coverImages/toystory.jpg';
import trainingDay from '../coverImages/trainingday.png';

  export default function getFilms() {
    return [
        { id: 'batman', title: 'The Dark Knight', filmImage: batman, synopsis: `When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.` },
        { id: 'inception', title: 'Inception', filmImage: inception, synopsis: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.` },
        { id: 'jurassicpark', title: 'Jurassic Park', filmImage: jurassicPark, synopsis: `During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.` },
        { id: 'thelordoftheRings', title: 'The Lord Of The Rings', filmImage: lordOfTheRings, synopsis: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.` },
        { id: 'matrix', title: 'The Matrix', filmImage: matrix, synopsis: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.` },
        { id: 'pulpfiction', title: 'Pulp Fiction', filmImage: pulpFiction, synopsis: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.` },
        { id: 'thelastsamurai', title: 'The Last Samurai', filmImage: lastSamurai, synopsis: `In Japan, Civil War veteran Captain Nathan Algren trains the Emperor's troops to use modern weapons as they prepare to defeat the last of the country's samurais. But Algren's passion is swayed when he is captured by the samurai and learns about their traditions and code of honor.` },
        { id: 'toystory', title: 'Toy Story 4', filmImage: toyStory, synopsis: `Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody's slight detour leads him to his long-lost friend Bo Peep.` },
        { id: 'homealone', title: 'Home Alone', filmImage: homeAlone, synopsis: `An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.` },
        { id: 'trainingday', title: 'Training Day', filmImage: trainingDay, synopsis: `On his first day on the job as a Los Angeles narcotics officer, a rookie cop goes beyond a full work day in training within the narcotics division of the L.A.P.D. with a rogue detective who isn't what he appears to be.` }
    ];
  }