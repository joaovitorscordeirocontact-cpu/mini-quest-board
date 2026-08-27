import { Header } from "../../components/Header";
import { PageHeading } from "../../components/PageHeading";
import { AboutTheApp } from "./AboutTheApp";
import { BuiltWith } from "./BuiltWith";
import { MainFeatures } from "./MainFeatures";


export function About({page}) {
  return (
    <>
      <Header />
      <PageHeading page={page}/>
      <AboutTheApp />
      <BuiltWith />
      <MainFeatures />
    </>
  );
}