import React, {useState, useEffect} from 'react'
import {
    CNav,
    CNavItem,
    CNavLink,
    CTabs,
    CTabContent,
    CTabPane
} from '@coreui/react'


import DrawArea from './components/DrawArea';
import SpatialDomain from './specification/spatial-domain/SpatialDomain';


export default function LTC() {

    const [activeKey, setActiveKey] = useState(1)

    useEffect(() => {console.log(activeKey)},[activeKey])

    return (
      <>
        <DrawArea />
        <CTabs activeTab="spatial-domain">
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink data-tab="spatial-domain">Spatial Domain</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="boundaries">Boundaries</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="interventions">Interventions</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="waves">Waves</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="tides">Tides</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="outputs">Outputs</CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane data-tab="spatial-domain">
              <SpatialDomain />
            </CTabPane>
            <CTabPane data-tab="boundaries">Boundaries</CTabPane>
            <CTabPane data-tab="interventions">Interventions</CTabPane>
            <CTabPane data-tab="waves">Waves</CTabPane>
            <CTabPane data-tab="tides">Tides</CTabPane>
            <CTabPane data-tab="outputs">Outputs</CTabPane>
          </CTabContent>
        </CTabs>
      </>
    );
}
