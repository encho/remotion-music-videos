import { spawn } from "child_process";

type RenderJob = {
  outputFile: string;
  propsFile: string;
};

const renders: RenderJob[] = [
  {
    outputFile: "out/03-semplicemente/01-il-pescatore.mp4",
    propsFile: "./renderProps/03-semplicemente/01-il-pescatore.json",
  },
  {
    outputFile: "out/03-semplicemente/02-deine-liebe-klebt.mp4",
    propsFile: "./renderProps/03-semplicemente/02-deine-liebe-klebt.json",
  },
  {
    outputFile: "out/03-semplicemente/03-pane-e-sale.mp4",
    propsFile: "./renderProps/03-semplicemente/03-pane-e-sale.json",
  },
  {
    outputFile: "out/03-semplicemente/04-una-notte-che-vola-via.mp4",
    propsFile: "./renderProps/03-semplicemente/04-una-notte-che-vola-via.json",
  },
  {
    outputFile: "out/03-semplicemente/05-rimini.mp4",
    propsFile: "./renderProps/03-semplicemente/05-rimini.json",
  },
  {
    outputFile: "out/03-semplicemente/06-niente-da-perdere.mp4",
    propsFile: "./renderProps/03-semplicemente/06-niente-da-perdere.json",
  },
  {
    outputFile: "out/03-semplicemente/07-hai-scelto-me.mp4",
    propsFile: "./renderProps/03-semplicemente/07-hai-scelto-me.json",
  },
  {
    outputFile: "out/03-semplicemente/08-allora-canto.mp4",
    propsFile: "./renderProps/03-semplicemente/08-allora-canto.json",
  },
  {
    outputFile: "out/03-semplicemente/09-nothing-pleases-without-you.mp4",
    propsFile:
      "./renderProps/03-semplicemente/09-nothing-pleases-without-you.json",
  },
  {
    outputFile: "out/03-semplicemente/10-lady.mp4",
    propsFile: "./renderProps/03-semplicemente/10-lady.json",
  },
];

async function runRender({ outputFile, propsFile }: RenderJob) {
  return new Promise<void>((resolve, reject) => {
    console.log(`\n🎬 Starting: ${outputFile}\n`);

    const child = spawn(
      "npx",
      ["remotion", "render", "Visualizer", outputFile, `--props=${propsFile}`],
      {
        shell: true,
        stdio: "inherit",
      },
    );

    child.on("error", (err: Error) => {
      reject(err);
    });

    child.on("close", (code: number) => {
      if (code === 0) {
        console.log(`\n✅ Finished: ${outputFile}`);
        resolve();
      } else {
        reject(new Error(`❌ Render failed (exit code ${code})`));
      }
    });
  });
}

async function runAllSequential() {
  try {
    for (const job of renders) {
      await runRender(job);
    }
    console.log("\n🎉 All renders completed!");
  } catch (err) {
    console.error("\n⛔ Aborted due to error:", (err as Error).message);
    process.exit(1);
  }
}

runAllSequential();
