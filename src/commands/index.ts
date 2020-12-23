import { flatten } from 'lodash'
import { ExtensionModule } from '../modules'
import configLocales from './configLocalePaths'
import configLanguages from './configLanguages'
import keyManipulations from './keyManipulations'
import extractText from './extractText'
import help from './help'
import refreshUsageReport from './refreshUsageReport'
import editor from './openEditor'
import review from './review'
import deepl from './deepl'

const m: ExtensionModule = (ctx) => {
  return flatten([
    configLocales(ctx),
    configLanguages(ctx),
    keyManipulations(ctx),
    extractText(ctx),
    help(ctx),
    refreshUsageReport(ctx),
    editor(ctx),
    review(ctx),
    deepl(ctx),
  ])
}

export default m
