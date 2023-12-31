// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nmyTYNEmJ2A5WnCGcgGrL1

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css"; // plasmic-import: qF0uJxFztB/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider"; // plasmic-import: DmrLLHGTjGTE/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, embedCssProps, antdConfigProviderProps } = props;

  return (
    <EmbedCss
      {...embedCssProps}
      css={
        embedCssProps && "css" in embedCssProps
          ? embedCssProps.css!
          : "*{\n    direction: rtl;\n}\n\n@keyframes customAnimation {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n/* Apply the animation to an element */\n.redLight {\n  animation: customAnimation 1s infinite;\n  animation-delay: 0.1s;\n}\n\n.select *{\n\n  color: #1677FF !important;\n  border-color: #1677FF;\n}\n\n.option *{\n  color: #1677FF !important;\n}"
      }
    >
      <AntdConfigProvider
        {...antdConfigProviderProps}
        borderRadius={
          antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
            ? antdConfigProviderProps.borderRadius!
            : 12
        }
        colorBgBase={
          antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
            ? antdConfigProviderProps.colorBgBase!
            : "#1677FF"
        }
        colorError={
          antdConfigProviderProps && "colorError" in antdConfigProviderProps
            ? antdConfigProviderProps.colorError!
            : "#ff4d4f"
        }
        colorInfo={
          antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
            ? antdConfigProviderProps.colorInfo!
            : "#1677FF"
        }
        colorPrimary={
          antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
            ? antdConfigProviderProps.colorPrimary!
            : "#1677FF"
        }
        colorSuccess={
          antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
            ? antdConfigProviderProps.colorSuccess!
            : "#52c41a"
        }
        colorWarning={
          antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
            ? antdConfigProviderProps.colorWarning!
            : "#faad14"
        }
        controlHeight={
          antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
            ? antdConfigProviderProps.controlHeight!
            : 32
        }
        defaultDark={
          antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
            ? antdConfigProviderProps.defaultDark!
            : false
        }
        lineWidth={
          antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
            ? antdConfigProviderProps.lineWidth!
            : 1
        }
        loadingText={
          antdConfigProviderProps && "loadingText" in antdConfigProviderProps
            ? antdConfigProviderProps.loadingText!
            : undefined
        }
        removeLoading={
          antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
            ? antdConfigProviderProps.removeLoading!
            : undefined
        }
        sizeStep={
          antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeStep!
            : 4
        }
        sizeUnit={
          antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeUnit!
            : 4
        }
        themeStyles={
          antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
            ? antdConfigProviderProps.themeStyles!
            : true
            ? {
                fontFamily: "Vazirmatn",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.5",
                color: "#1677FF",
                letterSpacing: "normal"
              }
            : undefined
        }
        wireframe={
          antdConfigProviderProps && "wireframe" in antdConfigProviderProps
            ? antdConfigProviderProps.wireframe!
            : false
        }
      >
        {children}
      </AntdConfigProvider>
    </EmbedCss>
  );
}
