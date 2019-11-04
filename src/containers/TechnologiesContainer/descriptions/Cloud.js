import tech_chips from '../chips';

const cloudDescriptions = {
    headline: "Cloud Deployment",
    tldr: "I can spin you up an NodeJs Express server with all the routes running in an EC2 instance in no time. I can also " +
        "create a React app hosted on AWS S3 with it's own domain.",
    longForm: "During the Fall of 2018 semester while taking 'Programming on the Cloud' (COEN 424), I followed an " +
        "Udemy course to setup an EC2 instance to work with Jupyter Notebooks so we could deploy a PySpark " +
        "application that determined the sentiment of Bitcoin, although in a fairly rudimentary way. My NodeJs " +
        "server for my IOT Capstone project also runs in an EC2 instance. This site is hosted from  an AWS " +
        "S3 bucket and has its own domain through AWS Route 53. I'm a bit new to cloud deployments though " +
        "I think I'd be considered advanced for an recent grad. I recently started coding in Bash and now update my EC2 servers using a script. In my latest work I'm also deploying to S3 using the AWS cli. Where I need more practice is using the services beyond free tier and best practices for security.",
    chips: tech_chips.cloud
};

export default cloudDescriptions;