/**
 * Climate integration
 * Source: https://github.com/home-assistant/core/blob/dev/homeassistant/components/climate/__init__.py
 */
import { IncludeList } from "../../types";
import { PlatformSchema } from "../platform";

export type Domain = "climate";
export type Schema = Item[] | IncludeList;
export type File = Item | Item[];

/**
 * @TJS-additionalProperties true
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OtherPlatform extends PlatformSchema {
  platform: string;
}

type Item = OtherPlatform;
