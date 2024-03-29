const copyhtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title></title>
    <link
      href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
      rel="stylesheet"
    />

    <style>
      #outlook a {
        padding: 0;
      }

      .ExternalClass {
        width: 100%;
      }

      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }

      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }

      s {
        text-decoration: line-through;
      }

      body {
        width: 100%;
        font-family: helvetica, "helvetica neue", arial, verdana, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
      }

      table td,
      html,
      body,
      .es-wrapper {
        padding: 0;
        margin: 0;
      }

      .es-content,
      .es-header,
      .es-footer {
        table-layout: fixed !important;
        width: 100%;
      }

      img {
        display: block;
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      table tr {
        border-collapse: collapse;
      }

      p,
      hr {
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 0;
        line-height: 120%;
        mso-line-height-rule: exactly;
        font-family: roboto, "helvetica neue", helvetica, arial, sans-serif;
      }

      p,
      ul li,
      ol li,
      a {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
      }

      .es-left {
        float: left;
      }

      .es-right {
        float: right;
      }

      .es-p5 {
        padding: 5px;
      }

      .es-p5t {
        padding-top: 5px;
      }

      .es-p5b {
        padding-bottom: 5px;
      }

      .es-p5l {
        padding-left: 5px;
      }

      .es-p5r {
        padding-right: 5px;
      }

      .es-p10 {
        padding: 10px;
      }

      .es-p10t {
        padding-top: 10px;
      }

      .es-p10b {
        padding-bottom: 10px;
      }

      .es-p10l {
        padding-left: 10px;
      }

      .es-p10r {
        padding-right: 10px;
      }

      .es-p15 {
        padding: 15px;
      }

      .es-p15t {
        padding-top: 15px;
      }

      .es-p15b {
        padding-bottom: 15px;
      }

      .es-p15l {
        padding-left: 15px;
      }

      .es-p15r {
        padding-right: 15px;
      }

      .es-p20 {
        padding: 20px;
      }

      .es-p20t {
        padding-top: 20px;
      }

      .es-p20b {
        padding-bottom: 20px;
      }

      .es-p20l {
        padding-left: 20px;
      }

      .es-p20r {
        padding-right: 20px;
      }

      .es-p25 {
        padding: 25px;
      }

      .es-p25t {
        padding-top: 25px;
      }

      .es-p25b {
        padding-bottom: 25px;
      }

      .es-p25l {
        padding-left: 25px;
      }

      .es-p25r {
        padding-right: 25px;
      }

      .es-p30 {
        padding: 30px;
      }

      .es-p30t {
        padding-top: 30px;
      }

      .es-p30b {
        padding-bottom: 30px;
      }

      .es-p30l {
        padding-left: 30px;
      }

      .es-p30r {
        padding-right: 30px;
      }

      .es-p35 {
        padding: 35px;
      }

      .es-p35t {
        padding-top: 35px;
      }

      .es-p35b {
        padding-bottom: 35px;
      }

      .es-p35l {
        padding-left: 35px;
      }

      .es-p35r {
        padding-right: 35px;
      }

      .es-p40 {
        padding: 40px;
      }

      .es-p40t {
        padding-top: 40px;
      }

      .es-p40b {
        padding-bottom: 40px;
      }

      .es-p40l {
        padding-left: 40px;
      }

      .es-p40r {
        padding-right: 40px;
      }

      .es-menu td {
        border: 0;
      }

      .es-menu td a img {
        display: inline-block !important;
      }

      a {
        text-decoration: none;
      }

      p,
      ul li,
      ol li {
        font-family: helvetica, "helvetica neue", arial, verdana, sans-serif;
        line-height: 150%;
      }

      ul li,
      ol li {
        margin-bottom: 15px;
        margin-left: 0;
      }

      .es-menu td a {
        text-decoration: none;
        display: block;
        font-family: helvetica, "helvetica neue", arial, verdana, sans-serif;
      }

      .es-wrapper {
        width: 100%;
        height: 100%;
        background-repeat: repeat;
        background-position: center top;
      }

      .es-wrapper-color,
      .es-wrapper {
        background-color: #ffffff;
      }

      .es-header {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
      }

      .es-header-body {
        background-color: transparent;
      }

      .es-header-body p,
      .es-header-body ul li,
      .es-header-body ol li {
        color: #333333;
        font-size: 14px;
      }

      .es-header-body a {
        color: #f6a1b4;
        font-size: 14px;
      }

      .es-content-body {
        background-color: #ffffff;
      }

      .es-content-body p,
      .es-content-body ul li,
      .es-content-body ol li {
        color: #333333;
        font-size: 14px;
      }

      .es-content-body a {
        color: #f6a1b4;
        font-size: 14px;
      }

      .es-footer {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
      }

      .es-footer-body {
        background-color: #666666;
      }

      .es-footer-body p,
      .es-footer-body ul li,
      .es-footer-body ol li {
        color: #ffffff;
        font-size: 14px;
      }

      .es-footer-body a {
        color: #f6a1b4;
        font-size: 14px;
      }

      .es-infoblock,
      .es-infoblock p,
      .es-infoblock ul li,
      .es-infoblock ol li {
        line-height: 120%;
        font-size: 12px;
        color: #cccccc;
      }

      .es-infoblock a {
        font-size: 12px;
        color: #cccccc;
      }

      h1 {
        font-size: 30px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
      }

      h2 {
        font-size: 26px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
      }

      h3 {
        font-size: 18px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
      }

      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 30px;
      }

      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 26px;
      }

      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 18px;
      }

      a.es-button,
      button.es-button {
        display: inline-block;
        background: #f8f3ef;
        border-radius: 3px;
        font-size: 17px;
        font-family: roboto, "helvetica neue", helvetica, arial, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 120%;
        color: #64434a;
        text-decoration: none;
        width: auto;
        text-align: center;
        padding: 10px 20px 10px 20px;
        mso-padding-alt: 0;
        mso-border-alt: 10px solid #f8f3ef;
      }

      .es-button-border {
        border-style: solid solid solid solid;
        border-color: transparent transparent transparent transparent;
        background: #f8f3ef;
        border-width: 0px 0px 0px 0px;
        display: inline-block;
        border-radius: 3px;
        width: auto;
      }

      .es-button img {
        display: inline-block;
        vertical-align: middle;
      }

      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }

        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120% !important;
        }

        h1 {
          font-size: 28px !important;
          text-align: center;
        }

        h2 {
          font-size: 26px !important;
          text-align: center;
        }

        h3 {
          font-size: 20px !important;
          text-align: center;
        }

        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 28px !important;
        }

        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }

        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }

        .es-menu td a {
          font-size: 14px !important;
        }

        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 14px !important;
        }

        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 14px !important;
        }

        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 14px !important;
        }

        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }

        *[class="gmail-fix"] {
          display: none !important;
        }

        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }

        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }

        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }

        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }

        .es-button-border {
          display: inline-block !important;
        }

        a.es-button,
        button.es-button {
          font-size: 16px !important;
          display: inline-block !important;
        }

        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }

        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }

        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }

        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }

        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }

        .es-m-p0 {
          padding: 0px !important;
        }

        .es-m-p0r {
          padding-right: 0px !important;
        }

        .es-m-p0l {
          padding-left: 0px !important;
        }

        .es-m-p0t {
          padding-top: 0px !important;
        }

        .es-m-p0b {
          padding-bottom: 0 !important;
        }

        .es-m-p20b {
          padding-bottom: 20px !important;
        }

        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }

        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }

        tr.es-desk-hidden {
          display: table-row !important;
        }

        table.es-desk-hidden {
          display: table !important;
        }

        td.es-desk-menu-hidden {
          display: table-cell !important;
        }

        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }

        table.es-social {
          display: inline-block !important;
        }

        table.es-social td {
          display: inline-block !important;
        }

        .es-desk-hidden {
          display: table-row !important;
          width: auto !important;
          overflow: visible !important;
          max-height: inherit !important;
        }
      }
    </style>
  </head>

  <body bis_status="ok">
    <div dir="ltr" class="es-wrapper-color">
      <table
        class="es-wrapper"
        style="background-position: center top"
        width="100%"
        cellspacing="0"
        cellpadding="0"
      >
        <tbody>
          <tr>
            <td class="esd-email-paddings" valign="top">
              <table
                class="es-header"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td
                      class="esd-stripe"
                      esd-custom-block-id="15610"
                      align="center"
                    >
                      <table
                        class="es-header-body"
                        style="background-color: #ffffff"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p10t es-p20b es-p10r es-p10l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="580"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-image"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <a
                                                href="https://example.com/"
                                                target="_blank"
                                                ><img
                                                  src="https://tlr.stripocdn.email/content/guids/CABINET_2f11996fd25c10fa0ab1cfc4c368879f/images/51391533554170857.png"
                                                  alt
                                                  style="display: block"
                                                  width="154"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td
                      class="esd-stripe"
                      style="background-color: transparent"
                      esd-custom-block-id="15611"
                      bgcolor="transparent"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="background-color: #fff4f7"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p15t es-p15b"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="600"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-menu"
                                              esd-img-prev-h="16"
                                              esd-img-prev-w="16"
                                              esd-tmp-menu-font-weight="normal"
                                            >
                                              <table
                                                class="es-menu"
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr class="links">
                                                    <td
                                                      class="es-p10t es-p10b es-p5r es-p5l"
                                                      style="
                                                        padding-bottom: 0px;
                                                        padding-top: 0px;
                                                      "
                                                      width="20.00%"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        style="
                                                          color: #64434a;
                                                          font-weight: normal;
                                                        "
                                                        href="https://example.com/"
                                                        >Daytime</a
                                                      >
                                                    </td>
                                                    <td
                                                      class="es-p10t es-p10b es-p5r es-p5l es-hidden"
                                                      style="
                                                        padding-bottom: 0px;
                                                        padding-top: 0px;
                                                      "
                                                      width="20.00%"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        style="
                                                          color: #64434a;
                                                          font-weight: normal;
                                                        "
                                                        href="https://example.com/"
                                                      >
                                                        Wear to Work</a
                                                      >
                                                    </td>
                                                    <td
                                                      class="es-p10t es-p10b es-p5r es-p5l"
                                                      style="
                                                        padding-bottom: 0px;
                                                        padding-top: 0px;
                                                      "
                                                      width="20.00%"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        style="
                                                          color: #64434a;
                                                          font-weight: normal;
                                                        "
                                                        href="https://example.com/"
                                                        >Cocktail</a
                                                      >
                                                    </td>
                                                    <td
                                                      class="es-p10t es-p10b es-p5r es-p5l"
                                                      style="
                                                        padding-bottom: 0px;
                                                        padding-top: 0px;
                                                      "
                                                      width="20.00%"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        style="
                                                          color: #64434a;
                                                          font-weight: normal;
                                                        "
                                                        href="https://example.com/"
                                                        >Formal</a
                                                      >
                                                    </td>
                                                    <td
                                                      class="es-p10t es-p10b es-p5r es-p5l es-hidden"
                                                      style="
                                                        padding-bottom: 0px;
                                                        padding-top: 0px;
                                                      "
                                                      width="20.00%"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        style="
                                                          color: #64434a;
                                                          font-weight: normal;
                                                        "
                                                        href="https://example.com/"
                                                      >
                                                        Dress Trends</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-content-body"
                        style="background-color: transparent"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td class="esd-structure" align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="600"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-image"
                                              style="font-size: 0"
                                            >
                                              <a target="_blank"
                                                ><img
                                                  class="adapt-img"
                                                  src="https://tlr.stripocdn.email/content/guids/CABINET_32d386ddfe0dd8db1e33b78c40ffd110/images/98611582716850076.png"
                                                  alt
                                                  style="display: block"
                                                  width="600"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p10t es-p10b"
                              align="left"
                            >
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p0r es-m-p20b esd-container-frame"
                                      width="190"
                                      align="center"
                                    >
                                      <table
                                        style="background-color: #f4cccc"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        bgcolor="#f4cccc"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-button"
                                              bgcolor="#f4cccc"
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  display: block;
                                                  background: #f4cccc none
                                                    repeat scroll 0% 0%;
                                                "
                                                ><a
                                                  href="https://example.com/"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    padding: 20px 0px 0px;
                                                    display: block;
                                                    font-style: italic;
                                                    font-family: lora, georgia,
                                                      'times new roman', serif;
                                                    font-size: 24px;
                                                    color: #ffffff;
                                                    background: #f4cccc none
                                                      repeat scroll 0% 0%;
                                                    mso-border-alt: 10px solid
                                                      #f4cccc;
                                                  "
                                                  >our</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-button"
                                              bgcolor="#f4cccc"
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  display: block;
                                                  background: #f4cccc none
                                                    repeat scroll 0% 0%;
                                                "
                                                ><a
                                                  href="https://example.com/"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    padding: 0px 0px 20px;
                                                    display: block;
                                                    font-size: 24px;
                                                    font-family: georgia, times,
                                                      'times new roman', serif;
                                                    background: #f4cccc none
                                                      repeat scroll 0% 0%;
                                                    mso-border-alt: 10px solid
                                                      #f4cccc;
                                                  "
                                                  >EVENTS</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td class="es-hidden" width="20"></td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p0r es-m-p20b esd-container-frame"
                                      width="189"
                                      align="center"
                                    >
                                      <table
                                        style="
                                          background-repeat: repeat;
                                          background-color: #f8f3ef;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        bgcolor="#f8f3ef"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-button"
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  display: block;
                                                  background: #f8f3ef none
                                                    repeat scroll 0% 0%;
                                                "
                                                ><a
                                                  href="https://example.com/"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    padding: 20px 0px 0px;
                                                    display: block;
                                                    font-style: italic;
                                                    font-family: lora, georgia,
                                                      'times new roman', serif;
                                                    font-size: 24px;
                                                    color: #f4cccc;
                                                    background: #f8f3ef none
                                                      repeat scroll 0% 0%;
                                                    mso-border-alt: 10px solid
                                                      #f8f3ef;
                                                  "
                                                  >last</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-button"
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  display: block;
                                                  background: #f8f3ef none
                                                    repeat scroll 0% 0%;
                                                "
                                                ><a
                                                  href="https://example.com/"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    padding: 0px 0px 20px;
                                                    display: block;
                                                    font-size: 24px;
                                                    font-family: georgia, times,
                                                      'times new roman', serif;
                                                    background: #f8f3ef none
                                                      repeat scroll 0% 0%;
                                                    mso-border-alt: 10px solid
                                                      #f8f3ef;
                                                  "
                                                  >BLOG</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="es-right"
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p0r esd-container-frame"
                                      width="181"
                                      align="center"
                                    >
                                      <table
                                        style="
                                          background-repeat: repeat;
                                          background-color: #b6d7a8;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        bgcolor="#b6d7a8"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-button"
                                              bgcolor="#b6d7a8"
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  display: block;
                                                  background: #b6d7a8 none
                                                    repeat scroll 0% 0%;
                                                "
                                                ><a
                                                  href="https://example.com/"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    padding: 20px 0px 0px;
                                                    display: block;
                                                    font-style: italic;
                                                    font-family: lora, georgia,
                                                      'times new roman', serif;
                                                    font-size: 24px;
                                                    color: #ffffff;
                                                    background: #b6d7a8 none
                                                      repeat scroll 0% 0%;
                                                    mso-border-alt: 10px solid
                                                      #b6d7a8;
                                                  "
                                                  >our</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-button"
                                              bgcolor="#b6d7a8"
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  display: block;
                                                  background: #b6d7a8 none
                                                    repeat scroll 0% 0%;
                                                "
                                                ><a
                                                  href="https://example.com/"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    padding: 0px 0px 20px;
                                                    display: block;
                                                    font-size: 24px;
                                                    font-family: georgia, times,
                                                      'times new roman', serif;
                                                    background: #b6d7a8 none
                                                      repeat scroll 0% 0%;
                                                    mso-border-alt: 10px solid
                                                      #b6d7a8;
                                                  "
                                                  >STORES</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20b"
                              align="left"
                              background="https://tlr.stripocdn.email/content/guids/CABINET_32d386ddfe0dd8db1e33b78c40ffd110/images/811582721778722.png"
                              style="
                                background-image: url(https://tlr.stripocdn.email/content/guids/CABINET_32d386ddfe0dd8db1e33b78c40ffd110/images/811582721778722.png);
                                background-repeat: no-repeat;
                                background-position: center top;
                                background-color: #efefef;
                              "
                              bgcolor="#efefef"
                              esd-custom-block-id="102544"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="600"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-spacer"
                                              height="96"
                                            ></td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p15r es-p15l es-m-txt-l"
                                              bgcolor="transparent"
                                              align="left"
                                            >
                                              <h1
                                                style="
                                                  font-size: 40px;
                                                  color: #010101;
                                                "
                                              >
                                                <strong>20% OFF</strong>
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10b es-p15r es-p15l es-m-txt-l"
                                              align="left"
                                            >
                                              <h2 style="color: #010101">
                                                <strong
                                                  >ON YOUR SHOPPING</strong
                                                >
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-button es-p15r es-p15l"
                                              align="left"
                                            >
                                              <span class="es-button-border"
                                                ><a
                                                  href="https://example.com/"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    padding: 10px 20px;
                                                    color: #010101;
                                                  "
                                                  >Shop Now</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p25t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="560"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-text"
                                              align="center"
                                            >
                                              <h2 style="color: #333333">
                                                Women's Dresses
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t"
                                              align="center"
                                            >
                                              <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-content-body"
                        style="background-color: #ffffff"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20b es-p20r es-p20l"
                              esd-custom-block-id="15618"
                              align="left"
                            >
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p20b esd-container-frame"
                                      esd-custom-block-id="15619"
                                      width="270"
                                      align="left"
                                      esdev-config="h1"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-image"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://example.com/"
                                                ><img
                                                  class="adapt-img"
                                                  src="https://tlr.stripocdn.email/content/guids/CABINET_2f11996fd25c10fa0ab1cfc4c368879f/images/55071533713868353.jpg"
                                                  alt="Floral-Embroidered A-Line Gown"
                                                  style="display: block"
                                                  title="Floral-Embroidered A-Line Gown"
                                                  width="270"
                                              /></a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b es-p15r es-p15l"
                                              align="left"
                                            >
                                              <h3 style="color: #333333">
                                                Floral-Embroidered A-Line Gown
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <table
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      width="50%"
                                                      align="left"
                                                    >
                                                      <table
                                                        width="100%"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              esdev-links-color="#ffffff"
                                                              class="esd-block-text es-m-txt-c es-p5t es-p15r es-p15l"
                                                              width="50%"
                                                              align="left"
                                                            >
                                                              <p
                                                                style="
                                                                  font-size: 18px;
                                                                "
                                                                class="price"
                                                              >
                                                                $40.00
                                                              </p>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                    <td
                                                      class="esd-block-button"
                                                      width="50%"
                                                      align="center"
                                                    >
                                                      <span
                                                        class="es-button-border"
                                                        ><a
                                                          href="https://example.com/"
                                                          class="es-button"
                                                          target="_blank"
                                                          style="
                                                            padding: 10px 20px;
                                                          "
                                                          >Buy now</a
                                                        ></span
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="es-right"
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p20b esd-container-frame"
                                      esd-custom-block-id="11008"
                                      width="270"
                                      align="left"
                                      esdev-config="h2"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-image"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://example.com/"
                                                ><img
                                                  class="adapt-img"
                                                  src="https://tlr.stripocdn.email/content/guids/CABINET_2f11996fd25c10fa0ab1cfc4c368879f/images/62751533713401325.jpg"
                                                  alt="Floral-Embroidered A-Line Gown"
                                                  style="display: block"
                                                  title="Floral-Embroidered A-Line Gown"
                                                  width="270"
                                              /></a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b es-p15r es-p15l"
                                              align="left"
                                            >
                                              <h3 style="color: #333333">
                                                Floral-Embroidered A-Line Gown
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <table
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      width="50%"
                                                      align="left"
                                                    >
                                                      <table
                                                        width="100%"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              esdev-links-color="#ffffff"
                                                              class="esd-block-text es-m-txt-c es-p5t es-p15r es-p15l"
                                                              width="50%"
                                                              align="left"
                                                            >
                                                              <p
                                                                style="
                                                                  font-size: 18px;
                                                                "
                                                                class="price"
                                                              >
                                                                $40.00
                                                              </p>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                    <td
                                                      class="esd-block-button"
                                                      width="50%"
                                                      align="center"
                                                    >
                                                      <span
                                                        class="es-button-border"
                                                        ><a
                                                          href="https://example.com/"
                                                          class="es-button"
                                                          target="_blank"
                                                          style="
                                                            padding: 10px 20px;
                                                          "
                                                          >Buy now</a
                                                        ></span
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-content-body"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p15t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="560"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-text"
                                              align="center"
                                            >
                                              <h2 style="color: #333333">
                                                Style feed
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t"
                                              align="center"
                                            >
                                              <p>
                                                Unknown printer took a galley of
                                                type and scrambled it to make a
                                                type specimen book.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              esd-custom-block-id="15620"
                              align="left"
                            >
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p0r es-m-p20b esd-container-frame"
                                      width="174"
                                      align="center"
                                      esdev-config="h3"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-image"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://example.com/"
                                                ><img
                                                  class="adapt-img"
                                                  src="https://tlr.stripocdn.email/content/guids/CABINET_2f11996fd25c10fa0ab1cfc4c368879f/images/58401534233931738.jpg"
                                                  alt="TOP 10: BACK-TO-SCHOOL ITEMS"
                                                  style="display: block"
                                                  title="TOP 10: BACK-TO-SCHOOL ITEMS"
                                                  width="174"
                                              /></a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b"
                                              align="left"
                                            >
                                              <h3 style="color: #333333">
                                                TOP 10: BACK-TO-SCHOOL ITEMS
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-m-txt-c"
                                              align="left"
                                            >
                                              <p>
                                                <a
                                                  target="_blank"
                                                  href="https://example.com/"
                                                  >Read more &gt;</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td class="es-hidden" width="20"></td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p20b esd-container-frame"
                                      width="173"
                                      align="center"
                                      esdev-config="h4"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-image"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://example.com/"
                                                ><img
                                                  class="adapt-img"
                                                  src="https://tlr.stripocdn.email/content/guids/CABINET_2f11996fd25c10fa0ab1cfc4c368879f/images/34791534234108599.jpg"
                                                  alt="MY FABULOUS STYLE"
                                                  style="display: block"
                                                  title="MY FABULOUS STYLE"
                                                  width="173"
                                              /></a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b"
                                              align="left"
                                            >
                                              <h3 style="color: #333333">
                                                MY FABULOUS STYLE
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-m-txt-c"
                                              align="left"
                                            >
                                              <p>
                                                <a
                                                  target="_blank"
                                                  href="https://example.com/"
                                                  >Read more &gt;</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="es-right"
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="173"
                                      align="center"
                                      esdev-config="h5"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-image"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://example.com/"
                                                ><img
                                                  class="adapt-img"
                                                  src="https://tlr.stripocdn.email/content/guids/CABINET_2f11996fd25c10fa0ab1cfc4c368879f/images/90471534234367836.jpg"
                                                  alt="SUMMER PARTY STAFF STYLE"
                                                  style="display: block"
                                                  title="SUMMER PARTY STAFF STYLE"
                                                  width="173"
                                              /></a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b"
                                              align="left"
                                            >
                                              <h3 style="color: #333333">
                                                SUMMER PARTY STAFF STYLE
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-m-txt-c"
                                              align="left"
                                            >
                                              <p>
                                                <a
                                                  target="_blank"
                                                  href="https://example.com/"
                                                  >Read more &gt;</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              esd-custom-block-id="15621"
                              align="left"
                              esdev-config="h6"
                            >
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p20b esd-container-frame"
                                      width="270"
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-image"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://example.com/"
                                                ><img
                                                  class="adapt-img"
                                                  src="https://tlr.stripocdn.email/content/guids/CABINET_2f11996fd25c10fa0ab1cfc4c368879f/images/63191534234056150.jpg"
                                                  alt="MY FABULOUS STYLE"
                                                  style="display: block"
                                                  title="MY FABULOUS STYLE"
                                                  width="270"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="es-right"
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="270"
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b"
                                              align="left"
                                            >
                                              <h3 style="color: #333333">
                                                MY FABULOUS STYLE
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10b es-m-txt-c"
                                              align="left"
                                            >
                                              <p
                                                style="color: #333333"
                                                class="product-description"
                                              >
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-m-txt-c"
                                              align="left"
                                            >
                                              <p>
                                                <a
                                                  target="_blank"
                                                  href="https://example.com/"
                                                  >Read more &gt;</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20b es-p20r es-p20l"
                              esd-custom-block-id="15622"
                              align="left"
                              esdev-config="h7"
                            >
                             
                              <table
                                class="es-right"
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame es-m-p20b"
                                      width="270"
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-image"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://example.com/"
                                                ><img
                                                  class="adapt-img"
                                                  src="https://tlr.stripocdn.email/content/guids/CABINET_2f11996fd25c10fa0ab1cfc4c368879f/images/63191534234056150.jpg"
                                                  alt="MY FABULOUS STYLE"
                                                  style="display: block"
                                                  title="MY FABULOUS STYLE"
                                                  width="270"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="270"
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b"
                                              align="left"
                                            >
                                              <h3 style="color: #333333">
                                                MY FABULOUS STYLE
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10b es-m-txt-c"
                                              align="left"
                                            >
                                              <p
                                                style="color: #333333"
                                                class="product-description"
                                              >
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-m-txt-c"
                                              align="left"
                                            >
                                              <p>
                                                <a
                                                  target="_blank"
                                                  href="https://example.com/"
                                                  >Read more &gt;</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-content-body"
                        style="background-color: #ffffff"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p15b es-p20r es-p20l"
                              esd-custom-block-id="15623"
                              align="left"
                            >
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p20b esd-container-frame"
                                      width="172"
                                      align="left"
                                    >
                                      <table
                                        style="
                                          border-radius: 3px;
                                          border-collapse: separate;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-spacer es-p5t es-p10b"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <table
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 2px solid
                                                          #f6a1b4;
                                                        background: rgba(
                                                            0,
                                                            0,
                                                            0,
                                                            0
                                                          )
                                                          none repeat scroll 0%
                                                          0%;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p5t es-p15r es-p15l"
                                              align="center"
                                            >
                                              <h4 style="color: #64434a">
                                                FREE Delivery
                                              </h4>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b es-p10r es-p10l"
                                              align="center"
                                            >
                                              <p>
                                                Free standard delivery on orders
                                                over $50
                                              </p>
                                            </td>
                                          </tr>
                                          <tr class="es-hidden">
                                            <td
                                              class="esd-block-spacer es-p5t es-p10b"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <table
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 2px solid
                                                          #f6a1b4;
                                                        background: rgba(
                                                            0,
                                                            0,
                                                            0,
                                                            0
                                                          )
                                                          none repeat scroll 0%
                                                          0%;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td class="es-hidden" width="20"></td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p20b esd-container-frame"
                                      width="170"
                                      align="left"
                                    >
                                      <table
                                        style="
                                          border-radius: 3px;
                                          border-collapse: separate;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-spacer es-p5t es-p10b"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <table
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 2px solid
                                                          #f6a1b4;
                                                        background: rgba(
                                                            0,
                                                            0,
                                                            0,
                                                            0
                                                          )
                                                          none repeat scroll 0%
                                                          0%;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p5t"
                                              align="center"
                                            >
                                              <h4 style="color: #64434a">
                                                100% Money back
                                              </h4>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b es-p10r es-p10l"
                                              align="center"
                                            >
                                              <p>Within 60 days of payment</p>
                                            </td>
                                          </tr>
                                          <tr class="es-hidden">
                                            <td
                                              class="esd-block-spacer es-p5t es-p10b"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <table
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 2px solid
                                                          #f6a1b4;
                                                        background: rgba(
                                                            0,
                                                            0,
                                                            0,
                                                            0
                                                          )
                                                          none repeat scroll 0%
                                                          0%;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="es-right"
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p20b esd-container-frame"
                                      width="178"
                                      align="left"
                                    >
                                      <table
                                        style="
                                          border-radius: 3px;
                                          border-collapse: separate;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-spacer es-p5t es-p10b"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <table
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 2px solid
                                                          #f6a1b4;
                                                        background: rgba(
                                                            0,
                                                            0,
                                                            0,
                                                            0
                                                          )
                                                          none repeat scroll 0%
                                                          0%;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p5t"
                                              align="center"
                                            >
                                              <h4 style="color: #64434a">
                                                24h Support
                                              </h4>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p10t es-p10b es-p10r es-p10l"
                                              align="center"
                                            >
                                              <p>
                                                Pellentesque vitaeLorem ipsum
                                                dol amet.
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-spacer es-p5t es-p10b"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <table
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 2px solid
                                                          #f6a1b4;
                                                        background: rgba(
                                                            0,
                                                            0,
                                                            0,
                                                            0
                                                          )
                                                          none repeat scroll 0%
                                                          0%;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-content-body"
                        style="background-color: transparent"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td class="esd-structure" align="left">
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="600"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        style="
                                          background-color: #fff4f7;
                                          border-radius: 3px;
                                          border-collapse: separate;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        bgcolor="#fff4f7"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-text es-p20t es-p5b es-p20r es-p20l"
                                              align="center"
                                            >
                                              <h3>Let's get social</h3>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td
                      class="esd-stripe"
                      style="background-color: #666666"
                      esd-custom-block-id="15624"
                      bgcolor="#666666"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="background-color: transparent"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td class="esd-structure" align="left">
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="600"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        style="
                                          background-color: #fff4f7;
                                          border-radius: 3px;
                                          border-collapse: separate;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                        bgcolor="#fff4f7"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-block-spacer es-p5t es-p5b es-p20r es-p20l"
                                              bgcolor="#fff4f7"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <table
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 1px solid
                                                          #fff4f7;
                                                        background: rgba(
                                                            0,
                                                            0,
                                                            0,
                                                            0
                                                          )
                                                          none repeat scroll 0%
                                                          0%;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="esd-block-social es-p5t es-p25b es-p20r es-p20l"
                                              align="center"
                                              style="font-size: 0"
                                            >
                                              <table
                                                class="es-table-not-adapt es-social"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      class="es-p10r"
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://example.com/"
                                                        ><img
                                                          title="Facebook"
                                                          src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                                          alt="Fb"
                                                          width="32"
                                                      /></a>
                                                    </td>
                                                    <td
                                                      class="es-p10r"
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://example.com/"
                                                        ><img
                                                          title="Twitter"
                                                          src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png"
                                                          alt="Tw"
                                                          width="32"
                                                      /></a>
                                                    </td>
                                                    <td
                                                      class="es-p10r"
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://example.com/"
                                                        ><img
                                                          title="Instagram"
                                                          src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png"
                                                          alt="Inst"
                                                          width="32"
                                                      /></a>
                                                    </td>
                                                    <td
                                                      class="es-p10r"
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://example.com/"
                                                        ><img
                                                          title="Youtube"
                                                          src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png"
                                                          alt="Yt"
                                                          width="32"
                                                      /></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td
                      class="esd-stripe"
                      style="background-color: #666666"
                      esd-custom-block-id="15625"
                      bgcolor="#666666"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="background-color: #666666"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#666666"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20b es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="560"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              esdev-links-color="#999999"
                                              class="esd-block-text"
                                              align="center"
                                            >
                                              <p style="color: #ffffff">
                                                You are receiving this email
                                                because you asked us about
                                                regular newsletter.
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-text es-p5b"
                                            >
                                              <p style="color: #ffffff">
                                                You can
                                                <a
                                                  class="unsubscribe"
                                                  target="_blank"
                                                  href="https://example.com"
                                                  >unsubscribe</a
                                                >
                                                from these emails.
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              esdev-links-color="#999999"
                                              class="esd-block-text es-p5b"
                                              align="center"
                                            >
                                              <p style="color: #ffffff">
                                                8475 Michaigan Ave. Santa
                                                Monica, CA 90645, US
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="esd-footer-popover es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td
                      class="esd-stripe"
                      style="background-color: #666666"
                      bgcolor="#666666"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="background-color: #666666"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p30t es-p30b es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="560"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`;

const nodemailer = require("nodemailer");

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const invitationUser = (req, res) => {
  const { userEmail } = req.body;
  console.log(userEmail);
  console.log(typeof userEmail);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: "Example title",
    html: copyhtml,
  };

  transporter
    .sendMail(message)
    .then(() => {
      console.log(`Email sent to ${userEmail}`);
      return res.status(201).json({ msg: "Email(s) sent successfully" });
    })
    .catch(error => {
      console.error("Error sending email(s):", error.message);
      return res
        .status(500)
        .json({ error: "Failed to send email(s). Please try again later." });
    });
};

module.exports = {
  invitationUser,
};
