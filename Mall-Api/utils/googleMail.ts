import nodemailer from "nodemailer";
import { google } from "googleapis";
import path from "path";
import ejs from "ejs";

const baseUrl: string = "http://localhost:5173";

const G_ID: string =
  "403139932252-k0ksvgd56ohc39lsckt5bt3oquahgnvb.apps.googleusercontent.com";
const G_SECRET: string = "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";
const G_REFRESH: string =
  "1//04bsN5npSCiQqCgYIARAAGAQSNwF-L9Irifs6Ypy-8tdvnhCU0OPHZDjC8st6x82OOKEzVryQnYpRCh6rzl-4DLsGrrkA7var9dI";
const G_URL: string = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(G_ID, G_SECRET, G_URL);
oAuth.setCredentials({ access_token: G_REFRESH });

export const sendOwnerOpeningMail = async (account: any, token: string) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "cfoonyemmemme@gmail.com",
        clientId: G_ID,
        clientSecret: G_SECRET,
        refreshToken: G_REFRESH,
        accessToken,
      },
    });

    const passedData = {
      url: `${baseUrl}/${token}/verify-account`,
    };

    const locateFile = path.join(__dirname, "../views/openingMail.ejs");
    const readMail = await ejs.renderFile(locateFile, passedData);

    const mailer = {
      from: "Aj Mall <cfoonyemmemme@gmail.com>",
      to: account?.email,
      subject: "E-commerce Platform .Verify",
      html: readMail,
    };

    transporter.sendMail(mailer);
  } catch (error) {
    console.log(error);
  }
};

export const sendAdminOpeningMail = async (account: any, tokenID: string) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "cfoonyemmemme@gmail.com",
        clientId: G_ID,
        clientSecret: G_SECRET,
        refreshToken: G_REFRESH,
        accessToken,
      },
    });
    const passedData = {
      secretKey: account?.secretKey,
      url: `${baseUrl}/api/admin/${tokenID}/verify-account-start`,
    };

    const locateFile = path.join(__dirname, "../views/adminMail.ejs");
    const readMail = await ejs.renderFile(locateFile, passedData);

    const mailer = {
      from: "Aj Mall Admin <cfoonyemmemme@gmail.com>",
      to: account?.email,
      subject: "E-commerce Platform .#Step One",
      html: readMail,
    };

    transporter.sendMail(mailer);
  } catch (error) {
    console.log(error);
  }
};

export const sendAdminLastMail = async (account: any, tokenID: string) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "cfoonyemmemme@gmail.com",
        clientId: G_ID,
        clientSecret: G_SECRET,
        refreshToken: G_REFRESH,
        accessToken,
      },
    });

    const passedData = {
      secretKey: account?.secretKey,
      url: `${baseUrl}/api/admin/${tokenID}/verify-admin`,
    };

    const locateFile = path.join(__dirname, "../views/adminSecondMail.ejs");
    const readMail = await ejs.renderFile(locateFile, passedData);

    const mailer = {
      from: "Aj Mall Admin <cfoonyemmemme@gmail.com>",
      to: account?.email,
      subject: "E-commerce Platform .#Final Step",
      html: readMail,
    };

    transporter.sendMail(mailer);
  } catch (error) {
    console.log(error);
  }
};

export const sendOwnerResetMail = async (account: any, token: string) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "cfoonyemmemme@gmail.com",
        clientId: G_ID,
        clientSecret: G_SECRET,
        refreshToken: G_REFRESH,
        accessToken,
      },
    });

    const passedData = {
      url: `${baseUrl}/api/${token}/reset-account-password`,
    };

    const locateFile = path.join(__dirname, "../views/resetMail.ejs");
    const readMail = await ejs.renderFile(locateFile, passedData);

    const mailer = {
      from: "Aj Mall <cfoonyemmemme@gmail.com>",
      to: account?.email,
      subject: "E-commerce Platform .Reset",
      html: readMail,
    };

    transporter.sendMail(mailer);
  } catch (error) {
    console.log(error);
  }
};

export const sendAdminResetMail = async (account: any, token: string) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "cfoonyemmemme@gmail.com",
        clientId: G_ID,
        clientSecret: G_SECRET,
        refreshToken: G_REFRESH,
        accessToken,
      },
    });

    const passedData = {
      url: `${baseUrl}/api/admin/${token}/reset-admin-password`,
    };

    const locateFile = path.join(__dirname, "../views/resetMail.ejs");
    const readMail = await ejs.renderFile(locateFile, passedData);

    const mailer = {
      from: "Aj Mall <cfoonyemmemme@gmail.com>",
      to: account?.email,
      subject: "E-commerce Platform .Reset",
      html: readMail,
    };

    transporter.sendMail(mailer);
  } catch (error) {
    console.log(error);
  }
};
