import React from "react";
import PropTypes from "prop-types";

const Footer = ({ html, gbLogo, theme }) => {
  //need to add logo to html for dangerouslySetInnerHTML
  //logo is passed separately from html as it is its own graphql query item.
  //  this was necessary to set a higher image quality
  const combinedHTML = `<img src=${gbLogo.resize.src} alt=''/>` + html;

  return (
    <React.Fragment>
      <footer className="footer" dangerouslySetInnerHTML={{__html: combinedHTML}} />

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          display:flex;
          align-items: center;
          justify-content: center;

          background: ${theme.color.neutral.white};
          padding: ${theme.space.inset.default};
          padding-top: 0;
          padding-bottom: 60px;
          margin-top: 20px;

          :global(img) {
            width: 30px;
          }

          :global(ul) {
            list-style: none;
            text-align: center;
            padding: 0;

            :global(li) {
              color: ${theme.color.neutral.gray.g};
              font-size: ${theme.font.size.xxs};
              padding: ${theme.space.xxs} ${theme.space.s};
              position: relative;
              display: inline-block;

              &::after {
                content: "•";
                position: absolute;
                right: ${`calc(${theme.space.xs} * -1)`};
              }
              &:last-child::after {
                content: "";
              }
            }
          }
        }

        @from-width desktop {
          .footer {
            padding: 0 1em 1.5em;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
