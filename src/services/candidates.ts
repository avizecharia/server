import candidate from "../models/candidate";
import Candidate from "../models/candidate";

export const sidInitDatabase = async () => {
  try {
    const cands = [
      {
        name: "John",
        image: "https://randomuser.me/api/portraits/med/women/43.jpg",
      },
      {
        name: "Johnnyiahooo",
        image: "https://randomuser.me/api/portraits/med/women/94.jpg",
      },
      {
        name: "Johnnyiel",
        image: "https://randomuser.me/api/portraits/med/women/75.jpg",
      },
      {
        name: "Johnny",
        image: "https://randomuser.me/api/portraits/med/women/83.jpg",
      },
    ];
    cands.map(async (cand) => {
      const newCAnd = new Candidate(cand);
      await newCAnd.save();
    });
  } catch (err) {
    console.log(
      "Error accured while trying to creatting intial state of candidates",
      err
    );
  }
};

export const getCandidateList = async () => {
    try {
        const list = await Candidate.find()
        return list
    } catch (err) {
        console.log(err);
        throw err
        
    }
}
