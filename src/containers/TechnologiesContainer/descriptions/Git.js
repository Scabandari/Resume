import tech_chips from '../chips';

const gitDescriptions = {
    headline: "Git",
    tldr: "I've been using git for a while now. I feel very comfortable with the basic workflow. I haven't " +
        "needed to use the more advanced features much but when I do I just look up the instructions " +
        "and voila.",
    longForm: "I've been using git for about 2 years now. We took a course where the main point of the " +
        "project was that everything was managed through github using issues to track documentation. " +
        "I practice that to this day as you'll see if you check out my repo for this site. My git work " +
        "flow goes like this: I have a local branch Ryan that matches my Ryan on github. I make a " +
        "feature branch off Ryan, come up with an awesome solution (or fail miserably and just burn " +
        "the branch) then I commit the changes, change back to my branch Ryan, merge those changes " +
        "and push those changes to my github branch Ryan from where I make a pull request.",
    chips: tech_chips.git
};

export default gitDescriptions;