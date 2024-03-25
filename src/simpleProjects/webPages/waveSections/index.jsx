import React from "react";
import Header from "./components/header";
import PearlSection from "./components/pearlSection";
import "./style.css";

function WaveSections() {
  return (
    <div id="wave-sections">
      <Header />
      <PearlSection
        className="diagonal"
        title="Diagonal"
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
          voluptates eos a expedita corrupti quas mollitia rerum. Unde molestias
          aliquam vero eos aut, culpa harum, impedit amet, deserunt veniam fuga.`}
      />
      <PearlSection
        title="Some Content Here"
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
          voluptates eos a expedita corrupti quas mollitia rerum. Unde molestias
          aliquam vero eos aut, culpa harum, impedit amet, deserunt veniam fuga.`}
      />
      <PearlSection
        className="spikes"
        title="Spikes"
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
          voluptates eos a expedita corrupti quas mollitia rerum. Unde molestias
          aliquam vero eos aut, culpa harum, impedit amet, deserunt veniam fuga.`}
      />
      <PearlSection
        title="Some Content Here"
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
          voluptates eos a expedita corrupti quas mollitia rerum. Unde molestias
          aliquam vero eos aut, culpa harum, impedit amet, deserunt veniam fuga.`}
      />
      <PearlSection
        className="wavy"
        title="Wavy"
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
          voluptates eos a expedita corrupti quas mollitia rerum. Unde molestias
          aliquam vero eos aut, culpa harum, impedit amet, deserunt veniam fuga.`}
      />
      <PearlSection
        title="Some Content Here"
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
          voluptates eos a expedita corrupti quas mollitia rerum. Unde molestias
          aliquam vero eos aut, culpa harum, impedit amet, deserunt veniam fuga.`}
      />
    </div>
  );
}

export default WaveSections;
