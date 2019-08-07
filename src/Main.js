import React from "react";
import PropTypes from "prop-types";
import { ExtensionUI } from "@gatsby-cloud-pkg/gatsby-cms-extension-base"

const Main = ({ config, entryData }) => {
  const { siteUrl, authToken } = config;
  const { url } = entryData;
  let entryUrl;
  if (typeof url === `string`)  entryUrl = url
  
  return (
    <div className="container" style={{ padding: '15px' }}>
        <ExtensionUI contentSlug={entryUrl} siteUrl={siteUrl} authToken={authToken} />
    </div>
  )
}

Main.propTypes = {
  config: PropTypes.object,
  entryData: PropTypes.object,
}

export default Main;
