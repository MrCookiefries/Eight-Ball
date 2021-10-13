import { useState } from "react";
import styles from "./EightBall.module.scss";

interface Answer {
    msg: string;
    color: string;
}

type EightBallProps = {
    answers?: Answer[];
}

const answerObjs: Answer[] = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
];

const EightBall = ({
    answers = answerObjs
}: EightBallProps) => {
    const [answer, setAnswer] = useState({ msg: "Think of a Question", color: "black" });
    const { msg, color } = answer;

    function updateBall(): void {
        const newAnswer = answers[Math.floor(Math.random() * answers.length)];
        setAnswer(newAnswer);
    }

    return (
        <section className={styles.EightBall}>
            <figure onClick={updateBall}>
                <div style={{backgroundColor: color}}>
                    <p>{msg}</p>
                </div>
            </figure>
        </section>
    )
};

export default EightBall;
