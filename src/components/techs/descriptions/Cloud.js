import tech_chips from '../chips';

const cloudDescriptions = {
    tldr: "I can spin you up an NodeJs server with all the routes running in an EC2 instance in no time. I can also " +
        "quickly create a ReactJs app hosted on AWS S3 with it's own domain.",
    longForm: "During the Fall of 2018 semester while taking 'Programming on the Cloud' (COEN 424), I followed an " +
        "Udemy course to setup an EC2 instance to work with Jupyter Notebooks so we could deploy a PySpark " +
        "application that determined the sentiment of Bitcoin, although in a fairly rudimentary way. My NodeJs " +
        "server for my IOT Capstone project also runs in an EC2 instance. This site is hosted from  an AWS " +
        "S3 bucket and has its own domain through AWS Route 53. I'm a bit new to cloud deployments though " +
        "I think I'd be considered advanced for an Undergrad since I can spin you up a NodeJs + Express server " +
        "with all the routes in no time. Where I need more practice is understanding more the IAM roles and " +
        "best practices for security.",
    chips: tech_chips.cloud
};

export default cloudDescriptions;