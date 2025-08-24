import type { RecordConfig } from "../typings/common.typing";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { destr } from "destr";

function readConfig(configPath: string): RecordConfig {
  return destr(readFileSync(configPath).toString());
}

function writeConfig(configPath: string, config: RecordConfig): void {
  const dir = dirname(configPath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(configPath, JSON.stringify(config, null, 4));
}

export { readConfig, writeConfig };
