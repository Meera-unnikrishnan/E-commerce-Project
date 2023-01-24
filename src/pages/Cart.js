import React from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX} from 'react-icons/bs';
import Navbar from '../components/Nav';
import { useNavigate } from "react-router-dom";

