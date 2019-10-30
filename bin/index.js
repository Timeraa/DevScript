#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ts = __importStar(require("typescript"));
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const fast_glob_1 = __importDefault(require("fast-glob"));
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
let config = {
    srcDir: "src",
    outDir: "dist",
    deleteObsolete: true,
    tsconfig: "tsconfig.json",
    file: "dist/index.js"
}, child = null, copyTask;
if (fs_1.existsSync(`${process.cwd()}/.devScript.json`)) {
    try {
        config = JSON.parse(fs_1.readFileSync(`${process.cwd()}/.devScript.json`, "utf-8"));
    }
    catch (e) {
        console.error("Invalid Syntax:", e.message);
        process.exit();
    }
}
if (!config.srcDir)
    config.srcDir = "src";
if (!config.outDir)
    config.outDir = "dist";
if (!config.deleteObsolete)
    config.deleteObsolete = true;
if (!config.tsconfig)
    config.tsconfig = "tsconfig.json";
if (!config.file)
    config.file = "index.js";
const formatHost = {
    getCanonicalFileName: path => path,
    getCurrentDirectory: ts.sys.getCurrentDirectory,
    getNewLine: () => ts.sys.newLine
};
const createProgram = ts.createSemanticDiagnosticsBuilderProgram;
const host = ts.createWatchCompilerHost(`${process.cwd()}/${config.tsconfig}`, {}, ts.sys, createProgram, reportDiagnostic, fileChange);
function reportDiagnostic(diagnostic) {
    console.log(chalk_1.default.redBright(ts.formatDiagnostic(diagnostic, formatHost)));
}
ts.createWatchProgram(host);
async function fileChange(diagnostic) {
    if ([6031, 6032].includes(diagnostic.code)) {
        console.log(chalk_1.default.blue(diagnostic.messageText.toString()));
        copyTask = copyFiles();
    }
    else if ([6194].includes(diagnostic.code)) {
        console.log(chalk_1.default.green(diagnostic.messageText.toString()));
        if (child && !child.killed)
            child.kill("SIGINT");
        await copyTask;
        if (config.file)
            child = child_process_1.fork(process.cwd() + "/" + config.file, [], {
                cwd: config.outDir
            });
    }
    else
        console.log(chalk_1.default.yellow(diagnostic.messageText.toString()));
}
async function copyFiles() {
    if (config.deleteObsolete)
        await deleteObsolete();
    fs_extra_1.copySync("src", "dist", {
        filter: function (path) {
            if (path.includes("/node_modules"))
                return false;
            return path_1.extname(path) !== ".ts";
        }
    });
}
async function deleteObsolete() {
    let dist = await fast_glob_1.default(config.outDir + "/**/*", {
        onlyFiles: true
    }), src = await fast_glob_1.default(config.srcDir + "/**/*", {
        onlyFiles: true
    });
    let nDist = dist.map(f => [f.replace(config.outDir, ""), f]);
    src = src
        .map(f => f.replace(config.srcDir, "").split(".")[0])
        .filter(sf => nDist.find(d => d[0].split(".")[0] == sf));
    Promise.all(dist
        .filter(f => !src.includes(f.replace(config.outDir, "").split(".")[0]))
        .map(f => fs_extra_1.removeSync(f)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLDJCQUF3RDtBQUN4RCwrQ0FBaUM7QUFDakMsa0RBQTBCO0FBQzFCLGlEQUFtRDtBQUNuRCwwREFBNkI7QUFDN0IsdUNBQWdEO0FBQ2hELCtCQUErQjtBQUUvQixJQUFJLE1BQU0sR0FBRztJQUNULE1BQU0sRUFBRSxLQUFLO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxjQUFjLEVBQUUsSUFBSTtJQUNwQixRQUFRLEVBQUUsZUFBZTtJQUN6QixJQUFJLEVBQUUsZUFBZTtDQUN0QixFQUNELEtBQUssR0FBaUIsSUFBSSxFQUMxQixRQUFzQixDQUFDO0FBRXpCLElBQUksZUFBVSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFO0lBQ2xELElBQUk7UUFDRixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDakIsaUJBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQzFELENBQUM7S0FDSDtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2hCO0NBQ0Y7QUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07SUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07SUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7SUFBRSxNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFD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