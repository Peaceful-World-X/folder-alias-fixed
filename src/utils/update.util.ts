import type { WorkspaceFolder } from "vscode";
import { existsSync, renameSync } from "node:fs";
import { join } from "node:path";
import { logger } from "./logger.util";

function changeConfig(workspace: WorkspaceFolder): void {
  const oldConfigPath = join(workspace.uri.fsPath, "folder-alias.json");
  const newConfigPath = join(workspace.uri.fsPath, ".vscode/folder-alias.json");
  if (existsSync(oldConfigPath) && !existsSync(newConfigPath)) {
    logger.warn("migrate old config to .vscode");
    renameSync(oldConfigPath, newConfigPath);
  }
  const oldPrivateConfigPath = join(workspace.uri.fsPath, "private-folder-alias.json");
  const newPrivateConfigPath = join(workspace.uri.fsPath, ".vscode/private-folder-alias.json");
  if (existsSync(oldPrivateConfigPath) && !existsSync(newPrivateConfigPath)) {
    logger.warn("migrate old private config to .vscode");
    renameSync(oldPrivateConfigPath, newPrivateConfigPath);
  }
}

export { changeConfig };
