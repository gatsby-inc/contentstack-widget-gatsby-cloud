import React from "react";
import PropTypes from 'prop-types';

import './style.css';
import Gatsby from "./Gatsby";

const Main = ({ config, entryData }) => {
  const { instanceUrl, authToken } = config;
  const { url } = entryData;

  return (
    <div className="container">
        {instanceUrl
          ? (
              <button
                type="button"
                className="preview-button"
                onClick={ async () => {
                  const normalize = part => part.replace(/\/$/, "");

                  const entryUrl = url.startsWith("/") ? url.slice(1) : url;
                  const normalizedInstanceUrl = normalize(instanceUrl);
                  
                  const pathQuery = `query getQualifiedSlug($entryUrl:String) { sitePage( path:{ ${entryUrl ? `regex` : `eq`}:$entryUrl } ) { path } }`;
                  const pathVariables = entryUrl ? `/${entryUrl}\/?$/` : "/";
                  try {
                    const res = await fetch(`${normalizedInstanceUrl}/___graphql`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "x-preview-auth-token": authToken,
                      },
                      body: JSON.stringify({
                        query: pathQuery,
                        variables: {
                          entryUrl: pathVariables,
                        }
                      })
                    });
                    const { data } = await res.json();
                    const path = data ? data.sitePage.path : "";
              
                    window.open(`${normalizedInstanceUrl}${path}`);
                  } catch (e) {
                    console.error(e);

                    window.open(`${normalizedInstanceUrl}/${entryUrl}`);
                  }
                }
              }
              >
                Open Preview
              </button>
          )
          : (
            <p>Missing required Gatsby Cloud instance url. Please check your extension config parameters.</p>
          )
        }
      <div className="powered-by">
        <p>Powered by:</p>
        <Gatsby />
      </div>
    </div>
  )
}

Main.propTypes = {
  config: PropTypes.object,
  entryData: PropTypes.object,
}

export default Main;
