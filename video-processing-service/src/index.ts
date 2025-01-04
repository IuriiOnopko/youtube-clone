import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();
app.use(express.json());


app.post(`/process-video`, (req, res) => {

        // Get file paths from the request body
        const inputFilePath = req.body.inputFilePath;
        const outputFilePath = req.body.outputFilePath;

        if (!inputFilePath || !outputFilePath) {
            res.status(400).send("Bad Request: inputFilePath or outputFilePath not specified.");
        }



        ffmpeg(inputFilePath)
            .outputOption("-vf", "scale=-1:360") // sets to 360p resolution
            .on("end", function () {
                res.status(200).send(`Processing finished.`);
            })
            .on("error", (err) => {
                console.log(`An error occured : ${err.message}`);
                res.status(500).send(`Internal Server error : ${err.message}`);
            })
            .save(outputFilePath);
    });


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(
        `Video processing service listening at http://localhost:${port}`);
});
