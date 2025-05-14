#!/usr/bin/env node
import readlineSync from 'readline-sync';
import runGame from '../src/index.js';
import { generateRound, rules } from '../src/games/even.js';

runGame(rules, generateRound);