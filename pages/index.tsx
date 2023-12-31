import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import getSurveyConfig from "@/lib/get-survey-config";
import SurveyForm from "@/components/shared/survey-form";
import { SurveyConfigType } from "types";

export function getServerSideProps() {
  return {
    props: {
      surveyConfig: getSurveyConfig(),
    },
  };
}

interface Props {
  surveyConfig: SurveyConfigType;
}

export default function Home({ surveyConfig }: Props) {
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Tell us what you like!</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            We'll use your feedback to improve our products and services.
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <SurveyForm surveyConfig={surveyConfig} />
        </motion.div>
      </motion.div>
      <motion.div>
      </motion.div>
    </Layout>
  );
}
