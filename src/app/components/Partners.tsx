import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaGitlab, FaGithub } from 'react-icons/fa';
import { DiMongodb, DiRedis, DiNginx } from 'react-icons/di';
import { SiCircleci, SiJfrog, SiElastic } from 'react-icons/si';
import { AiOutlineKubernetes } from 'react-icons/ai';
import { TbBrandBitbucket } from 'react-icons/tb';

const Partners = () => {
  return (
    <div className="bg-black">
      <div className="text-center p-6 mt-24 lg:mt-36 px-6 md:px-12 lg:px-20 bg-black text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-12 lg:mt-24">
          Develop from code to cloud <br /> with partners that you trust
        </h1>
        <p className="text-base md:text-xl mt-4 px-6 lg:px-24 font-bold">
          Our partnerships ensure that your development pipeline network will work in your preferred environment — <br />
          whether local or in the cloud.
        </p>
        <p className="text-lg md:text-xl font-bold text-blue-600 mt-4 flex justify-center items-center gap-1">
          Our trusted partners <FaArrowRightLong />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black justify-center items-center text-white px-6 md:px-12 lg:px-20 gap-6 lg:gap-12 text-lg lg:text-xl">
        <div>
          <Image src="/aws.png" alt="aws" width={150} height={150} />
          <p className="mt-4">
            Simplify the development of your multi-container applications from Docker CLI to Amazon EKS and Serverless.
          </p>
        </div>
        <div>
          <Image src="/Vs.png" alt="vs" width={110} height={110} />
          <p className="mt-4">
            Seamlessly bring container applications from your local machine and run them in Azure Container Instances.
          </p>
        </div>
        <div>
          <Image src="/jfog.png" alt="jfog" width={110} height={110} />
          <p className="mt-4">
            Easily distribute and share Docker images with the JFrog Artifactory image repository and integrate all of your
            development tools.
          </p>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl bg-black text-white text-center mt-12 lg:mt-20">
        Integrate with your favorite tools and images
      </h1>

      <div className="text-gray-500 grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8 md:mt-14 gap-6 md:gap-10 px-6 md:px-12 lg:px-14 font-bold text-xl lg:text-3xl">
        <h1 className="flex items-center gap-2">
          <FaGitlab /> Gitlab
        </h1>
        <h1 className="flex items-center gap-2">
          <DiMongodb /> Mongodb
        </h1>
        <h1 className="flex items-center gap-2">
          <SiCircleci /> Circleci
        </h1>
        <h1 className="flex items-center gap-2">
          <FaGithub /> Github
        </h1>
        <h1 className="flex items-center gap-2">
          <DiRedis /> Redis
        </h1>
        <h1 className="flex items-center gap-2">
          <DiNginx /> Nginx
        </h1>
        <h1 className="flex items-center gap-2">
          <SiJfrog /> Jfrog
        </h1>
        <h1 className="flex items-center gap-2">
          <AiOutlineKubernetes /> Kubernetes
        </h1>
        <h1 className="flex items-center gap-2">
          <SiElastic /> Elastic
        </h1>
        <h1 className="flex items-center gap-2">
          <TbBrandBitbucket /> Bitbucket
        </h1>
      </div>

      <div className="bg-black mt-20">
        <h1>....</h1>
      </div>
    </div>
  );
};

export default Partners;
